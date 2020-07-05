import React from "react";
import {NativeModules} from "react-native";

const {PureData: RNPureData} = NativeModules;

// TODO: refactor
const {sampleMethod} = RNPureData;

const registerAudioController = (id, {...audioProps}) => Promise
  .resolve()
  .then(() => console.warn('register audio props', id, audioProps))
  .then(() => sampleMethod("123", 3, () => console.warn('fn call')))
  .then(() => console.warn('called'));

const unregisterAudioController = id => Promise
  .resolve()
  .then(() => console.warn('unregister audio props', id));

const PureData = Object.freeze({
  registerAudioController,
  unregisterAudioController,
});

export default () => PureData;
