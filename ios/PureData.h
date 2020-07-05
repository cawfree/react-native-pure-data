#import <React/RCTBridgeModule.h>
#import "PdAudioController.h"

@interface PureData : NSObject <RCTBridgeModule>
  @property (strong, nonatomic) NSMutableDictionary *audioControllers;
@end
