import React from "react";
import PropTypes from "prop-types";
import {Patch} from "react-native-pure-data";

import helicopter from "../patches/helicopter.pd";

/* BE CAREFUL WITH THIS! DO *NOT* EXPERIMENT WITH WHILST WEARING HEADPHONES! */
const Helicopter = ({rotorSpeed, ...extraProps}) => (
  <Patch
    source={helicopter}
    onOff={1}
    loop={1}
    volume={0.001}
    highPass={100}
    bandPass={0}
    lowPass={0}
    highPassFilter={0}
    bandPassFilter={38}
    lowPassFilter={0}
    Q={119}
    attackTime={20}
    decayVolume={0.01}
    sustainVolume={20}
    releaseTime={1 / rotorSpeed}
  />
);

Helicopter.propTypes = {
  rotorSpeed: PropTypes.number,
};

Helicopter.defaultProps = {
  rotorSpeed: 1,
};

export default Helicopter;
