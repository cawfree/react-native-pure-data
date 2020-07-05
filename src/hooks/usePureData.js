import React from "react";
import {NativeModules} from "react-native";

const {PureData: RNPureData} = NativeModules;

// TODO: refactor
const {registerAudioController: nativeRegisterAudioController} = RNPureData;

// TODO: probably need to type check specific props here!
const registerAudioController = (id, {...audioProps}) => Promise
  .resolve()
  .then(() => console.warn('register audio props', id, audioProps))
  .then(() => nativeRegisterAudioController(id, audioProps))
  .then((e) => console.warn('called', e));

const unregisterAudioController = id => Promise
  .resolve()
  .then(() => console.warn('unregister audio props', id));

const PureData = Object.freeze({
  registerAudioController,
  unregisterAudioController,
});

export default () => PureData;
