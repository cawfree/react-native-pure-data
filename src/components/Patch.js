import React, {useState} from "react";
import PropTypes from "prop-types";
import useDeepCompareEffect from "use-deep-compare-effect";
import {typeCheck} from "type-check";
import {nanoid} from "nanoid/non-secure";

import {useAudioController, usePureData} from "../hooks";

const Patch = ({source, ...extraProps}) => {
  const [id] = useState(nanoid);
  const {id: audioControllerId, active: controllerIsActive} = useAudioController();
  const {registerPatch, registerReceivers} = usePureData();
  useDeepCompareEffect(
    () => {
      if (!!source) {
        registerPatch(audioControllerId, id, source);
      }
      return undefined;
    },
    [audioControllerId, id, source, registerPatch],
  );
  useDeepCompareEffect(
    () => {
      if (controllerIsActive) {
        const receivers = Object.entries(extraProps);
        const validReceivers = receivers
          .filter(([_, v]) => typeCheck("Number", v));
        if (receivers.length !== validReceivers.length) {
          console.warn(`Patch receiver props must be a Number. Non-numeric definitions will be ignored.`);
        }
        if (validReceivers.length > 0) {
          registerReceivers(audioControllerId, id, Object.fromEntries(validReceivers));
        }
      }
      return undefined;
    },
    [controllerIsActive, audioControllerId, id, extraProps, registerReceivers],
  );
  return null;
};

Patch.propTypes = {
  source: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({uri: PropTypes.string.isRequired})]).isRequired,
};

Patch.defaultProps = {
  source: null,
};

export default Patch;
