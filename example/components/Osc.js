import React from "react";
import PropTypes from "prop-types";
import {View, Text} from "react-native";
import {Patch} from "react-native-pure-data";

import patch from "../patches/osc.pd";

const Osc = ({onOff}) => (
  <Patch
    source={patch}
    onOff={onOff ? 1 : 0}
  >
    <View
      style={{
        width: 80,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
        children="osc ~"
      />
    </View>
  </Patch>
);

Osc.propTypes = {
  onOff: PropTypes.bool,
};

Osc.defaultProps = {
  onOff: false,
};

export default Osc;
