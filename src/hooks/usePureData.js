import React from "react";
import {NativeModules} from "react-native";
import axios from "axios";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";

const {PureData: RNPureData} = NativeModules;

const {
  registerAudioController,
  registerPatch: nativeRegisterPatch,
  registerReceivers: nativeRegisterReceivers,
} = RNPureData;

const registerPatch = (audioControllerId, patchId, source) => Promise
  .resolve()
  .then(() => resolveAssetSource(source))
  // TODO: We need to extend this functionality to compiled asset resolution.
  //       This is only yet compatible for network-defined assets, like those
  //       provided by metro.
  .then(
    ({...source}) => {
      const {uri: url} = source;
      return axios({url, method: "get"});
    },
  )
  .then(({data}) => nativeRegisterPatch(audioControllerId, patchId, data));

const registerReceivers = (audioControllerId, patchId, receivers) => Promise
  .resolve()
  .then(() => nativeRegisterReceivers(audioControllerId, patchId, receivers));

const PureData = Object.freeze({
  registerAudioController,
  registerPatch,
  registerReceivers,
});

export default () => PureData;
