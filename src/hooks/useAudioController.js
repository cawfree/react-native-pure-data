import React, { useContext } from "react";
import { typeCheck } from "type-check";

import { AudioControllerContext } from "../contexts";

export default () => {
  const { ...audioControllerContext } = useContext(AudioControllerContext);
  const { id } = audioControllerContext;
  if (!typeCheck("String", id)) {
    throw new Error(
      `A call to useAudioController() must be made within the scope of an <AudioController />.`
    );
  }
  return audioControllerContext;
};
