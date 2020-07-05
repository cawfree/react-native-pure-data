import React from "react";
import PropTypes from "prop-types";
import {Patch} from "react-native-pure-data";

import patch from "../patches/osc.pd";

const Osc = ({onOff}) => (
  <Patch
    source={patch}
    onOff={onOff ? 1 : 0}
  />
);

Osc.propTypes = {
  onOff: PropTypes.bool,
};

Osc.defaultProps = {
  onOff: false,
};

export default Osc;
