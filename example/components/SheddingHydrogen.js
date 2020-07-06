import React from "react";
import PropTypes from "prop-types";
import {Patch} from "react-native-pure-data";

import sheddingHydrogen from "../patches/shedding-hydrogen.pd";

const SheddingHydrogen = ({onOff}) => (
  <Patch
    onOff={onOff ? 1 : 0}
    source={sheddingHydrogen}
  />
);

SheddingHydrogen.propTypes = {};
SheddingHydrogen.defaultProps = {};

export default SheddingHydrogen;
