import React from "react";

const defaultContext = Object.freeze({active: false, sampleRate: 44100, numberOfChannels: 2, inputEnabled: false, mixingEnabled: false});

const AudioControllerContext = React.createContext(defaultContext);

AudioControllerContext.defaultContext = defaultContext;

export default AudioControllerContext;
