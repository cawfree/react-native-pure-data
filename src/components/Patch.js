import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import useDeepCompareEffect from "use-deep-compare-effect";
import {typeCheck} from "type-check";
import {nanoid} from "nanoid/non-secure";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";

import {useAudioController, usePureData} from "../hooks";

const Patch = ({source, ...extraProps}) => {
  const [id] = useState(nanoid);
  const [sync, setSync] = useState(new Date());
  const {id: audioControllerId, active: controllerIsActive, sync: controllerSync} = useAudioController();
  const {registerPatch, unregisterPatch, registerReceivers} = usePureData();

  const resolvedAssetSource = (!!source) ? resolveAssetSource(source) : null;

  useEffect(
    () => () => unregisterPatch(audioControllerId, id),
    [audioControllerId, id, setSync],
  );
  // TODO: use the actual contents for the deep comparison thing...
  useDeepCompareEffect(
    () => {
      registerPatch(audioControllerId, id, resolvedAssetSource)
        .then(() => setSync(new Date()));
      return undefined;
    },
    [audioControllerId, id, resolvedAssetSource, unregisterPatch, registerPatch],
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
    [controllerIsActive, audioControllerId, id, extraProps, registerReceivers, controllerSync, sync],
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
