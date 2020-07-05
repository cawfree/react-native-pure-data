import React from "react";
import {NativeModules} from "react-native";

const {PureData: RNPureData} = NativeModules;

const {registerAudioController} = RNPureData;

const PureData = Object.freeze({
  registerAudioController,
});

export default () => PureData;
