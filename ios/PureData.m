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
        
        // TODO: delegate to patch
        void* patch = [PdBase openFile:@"osc.pd" path:[[NSBundle mainBundle]resourcePath]];
        if (!patch) {
          NSLog(@"failed to open patch");
        } else {
          NSLog(@"succeeded");
        }

        // messages must be floats
        float yn = (float)YES;
        [PdBase sendFloat:yn toReceiver:@"onOff"];
        
        /* resolve to confirm configuration was successful */
        resolve(audioControllerId);
    }
}

@end
