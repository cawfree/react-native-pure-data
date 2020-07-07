import React from "react";
import { NativeModules } from "react-native";
import axios from "axios";
// TODO: remove and delegate
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";

const { PureData: RNPureData } = NativeModules;

const {
  registerAudioController,
  unregisterAudioController: nativeUnregisterAudioController,
  registerPatch: nativeRegisterPatch,
  unregisterPatch: nativeUnregisterPatch,
  registerReceivers,
} = RNPureData;

const registerPatch = (audioControllerId, patchId, source) =>
  Promise.resolve()
    // TODO: We need to extend this functionality to compiled asset resolution.
    //       This is only yet compatible for network-defined assets, like those
    //       provided by metro.
    .then(() => {
      const { uri: url } = source;
      return axios({ url, method: "get" });
    })
    .then(({ data }) => nativeRegisterPatch(audioControllerId, patchId, data));

const unregisterAudioController = (audioControllerId) =>
  Promise.resolve().then(() =>
    nativeUnregisterAudioController(audioControllerId)
  );

const unregisterPatch = (audioControllerId, patchId) =>
  Promise.resolve().then(() =>
    nativeUnregisterPatch(audioControllerId, patchId)
  );

const PureData = Object.freeze({
  registerAudioController,
  unregisterAudioController,
  registerPatch,
  unregisterPatch,
  registerReceivers,
});

export default () => PureData;
