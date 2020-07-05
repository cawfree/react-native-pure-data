import React from "react";
import {NativeModules} from "react-native";
import axios from "axios";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";

const {PureData: RNPureData} = NativeModules;

const {registerAudioController, registerPatch: nativeRegisterPatch} = RNPureData;

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
  .then(({data}) => nativeRegisterPatch(audioControllerId, patchId, data))
  .then(e => console.warn('finished native',e));

const PureData = Object.freeze({
  registerAudioController,
  registerPatch,
});

export default () => PureData;
