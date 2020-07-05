import React from "react";
import {NativeModules} from "react-native";

const {PureData: RNPureData} = NativeModules;

// TODO: refactor
const {registerAudioController: nativeRegisterAudioController} = RNPureData;

// TODO: probably need to type check specific props here!
const registerAudioController = (id, {...audioProps}) => Promise
  .resolve()
  .then(() => nativeRegisterAudioController(id, audioProps));

const unregisterAudioController = id => Promise
  .resolve()
  .then(() => console.warn('should unregister audio props', id));

const PureData = Object.freeze({
  registerAudioController,
  unregisterAudioController,
});

export default () => PureData;
