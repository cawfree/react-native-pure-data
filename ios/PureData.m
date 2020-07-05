#import "PureData.h"

#import "PdBase.h"
#import "PdAudioController.h"
#import "PdFile.h"
#import "PdDispatcher.h"

@implementation PureData

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(
  registerAudioController:(NSString *)audioControllerId
  audioProps:(nonnull NSDictionary *)audioProps
  resolve: (RCTPromiseResolveBlock) resolve
  reject:(RCTPromiseRejectBlock)reject)
{
    /* init dict where not exist */
    if (!self.audioControllers) self.audioControllers = [[NSMutableDictionary alloc]initWithCapacity:1];
    
    /* fetch audio props */
    NSInteger sampleRate = [[audioProps objectForKey:@"sampleRate"] integerValue];
    NSInteger numberOfChannels = [[audioProps objectForKey:@"numberOfChannels"] integerValue];
    BOOL inputEnabled = [[audioProps objectForKey:@"inputEnabled"] integerValue] > 0;
    BOOL mixingEnabled = [[audioProps objectForKey:@"mixingEnabled"] integerValue] > 0;
    
    PdAudioController* audioController = [self.audioControllers objectForKey:audioControllerId];
    
    /* alloc audioController if not found to exist */
    if (!audioController) {
        audioController = [[PdAudioController alloc] init];
        /* track the audioController */
        [self.audioControllers setObject:audioController forKey:audioControllerId];
    }
    
    /* disable the audioController during configuration */
    audioController.active = NO;
    
    /* check whether allocation was successful */
    PdAudioStatus status = [audioController configurePlaybackWithSampleRate:sampleRate
                                                             numberChannels:numberOfChannels
                                                               inputEnabled:inputEnabled
                                                              mixingEnabled:mixingEnabled];
    if (status == PdAudioError) {
        reject(@"PdAudioError", @"Failed to configure PdAudioController.", [NSError alloc]);
    } else if (status == PdAudioPropertyChanged) {
        reject(@"PdAudioPropertyChanged", @"Some of the audio parameters were not accepted.", [NSError alloc]);
    } else {
        /* determine whether active */
        audioController.active = [[audioProps objectForKey:@"active"] integerValue] > 0;
        /* resolve to confirm configuration was successful */
        resolve(audioControllerId);
    }
}

RCT_EXPORT_METHOD(
  unregisterAudioController:(NSString *)audioControllerId
  resolve: (RCTPromiseResolveBlock) resolve
  reject:(RCTPromiseRejectBlock)reject)
{
    PdAudioController* audioController = [self.audioControllers objectForKey:audioControllerId];
    
    if (!audioController) {
        reject(@"FailedToUnregisterAudioController", @"The requested AudioController does not exist.", [NSError alloc]);
    } else {
        /* deactivate */
        audioController.active = NO;
        /* remove instance */
        [self.audioControllers removeObjectForKey:audioControllerId];
        /* mark as unregistered */
        resolve(audioControllerId);
    }
}

RCT_EXPORT_METHOD(
  registerPatch:(NSString *)audioControllerId
  patchId:(NSString *)patchId
  patchData:(NSString *)patchData
  resolve: (RCTPromiseResolveBlock) resolve
  reject:(RCTPromiseRejectBlock)reject)
{
    /* init dict where not exist */
    if (!self.pdFiles) self.pdFiles = [[NSMutableDictionary alloc]initWithCapacity:1];
    
    /* does the patch already exist? */
    if ([self.pdFiles objectForKey:patchId]) {
        NSValue* value = [self.pdFiles objectForKey:patchId];
        /* close the file */
        [PdBase closeFile:[value pointerValue]];
        /* remove instance */
        [self.pdFiles removeObjectForKey:patchId];
    }
    
    /* compute the patch name */
    NSString *patchName = [NSString stringWithFormat:@"%@.pd", patchId];
    
    /* temporarily save the patch */
    NSString *tmpDirectory = NSTemporaryDirectory();
    NSString *tmpFile = [tmpDirectory stringByAppendingPathComponent:patchName];
    
    NSError* error;
    [patchData writeToFile:tmpFile atomically:YES encoding:NSUTF8StringEncoding error:&error];
    
    if (error) {
        reject(@"FailedToWritePatch", @"Unable to write patch to temporary directory.", error);
    } else {
        void* patch = [PdBase openFile:patchName path:tmpDirectory];
        if (!patch) {
            reject(@"FailedToOpenPatch", @"It is not possible to read this patch file.", [NSError alloc]);
        } else {
            [self.pdFiles setObject:[NSValue valueWithPointer:patch] forKey:patchId];
            /* confirm the patch is now ready */
            resolve(patchId);
        }
    }
}

RCT_EXPORT_METHOD(
  unregisterPatch:(NSString *)audioControllerId
  patchId:(NSString *)patchId
  resolve: (RCTPromiseResolveBlock) resolve
  reject:(RCTPromiseRejectBlock)reject)
{
    NSValue* value = [self.pdFiles objectForKey:patchId];
    
    if (!value) {
        reject(@"FailedToUnregisterPatch", @"The requested Patch does not exist.", [NSError alloc]);
    } else {
        /* close the file */
        [PdBase closeFile:[value pointerValue]];
        /* remove instance */
        [self.pdFiles removeObjectForKey:patchId];
        /* mark as unregistered */
        resolve(patchId);
    }
}

RCT_EXPORT_METHOD(
  registerReceivers:(NSString *)audioControllerId
  patchId:(NSString *)patchId
  receivers:(NSDictionary *)receivers
  resolve: (RCTPromiseResolveBlock) resolve
  reject:(RCTPromiseRejectBlock)reject)
{
    /* iterate the receivers */
    for (NSString* key in receivers) {
        Float32 toSend = [[receivers objectForKey:key] floatValue];
        [PdBase sendFloat:toSend toReceiver:key];
    }
    resolve(receivers);
}

@end
