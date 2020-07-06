import React from "react";
import PropTypes from "prop-types";

import {Patch} from "react-native-pure-data";

import idiotique from "../patches/idiotique.pd";

const Idiotique = ({onOff}) => (
  <>
    <Patch
      source={idiotique}
      onOff={onOff ? 1 : 0}
    />
  </>
);

Idiotique.propTypes = {
  onOff: PropTypes.bool,
};

Idiotique.defaultProps = {
  onOff: false,
};

export default Idiotique;
