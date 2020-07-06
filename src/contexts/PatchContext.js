import React from "react";

const defaultContext = Object.freeze({
  
});

const PatchContext = React.createContext(defaultContext);

PatchContext.defaultContext = defaultContext;

export default PatchContext;
