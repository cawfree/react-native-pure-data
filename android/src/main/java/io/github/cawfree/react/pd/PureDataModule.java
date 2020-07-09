package io.github.cawfree.react.pd;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableNativeArray;
import com.facebook.react.bridge.ReadableNativeMap;
import com.facebook.react.bridge.Arguments;

public class PureDataModule extends ReactContextBaseJavaModule {

  /** Default Constructor. */
  public PureDataModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "PureData";
  }

  @ReactMethod
  public final void registerAudioController(final String pAudioControllerId, final ReadableMap pAudioProps, final Promise pPromise) {
    pPromise.resolve(Arguments.createMap());
  }

  @ReactMethod
  public final void unregisterAudioController(final String pAudioControllerId, final Promise pPromise) {
    pPromise.resolve(Arguments.createMap());
  }

  @ReactMethod
  public final void registerPatch(final String pAudioControllerId, final String pPatchId, final String pPatchData, final Promise pPromise) {
    pPromise.resolve(Arguments.createMap());
  }

  @ReactMethod
  public final void unregisterPatch(final String pAudioControllerId, final String pPatchId, final Promise pPromise) {
    pPromise.resolve(Arguments.createMap());
  }

  @ReactMethod
  public final void registerReceivers(final String pAudioControllerId, final String pPatchId, final ReadableMap pReceivers, final Promise pPromise) {
    pPromise.resolve(Arguments.createMap());
  }

}
