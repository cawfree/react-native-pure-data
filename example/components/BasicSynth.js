import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Patch} from "react-native-pure-data";
import {Dial} from "react-native-dial";

import patch from "../patches/basic-synth.pd";

const BasicSynth = ({frequency}) => {
  const [value, setValue] = useState(0);
  return (
    <Patch
      source={patch}
      f={value}
    >
      <Dial
        initialRadius={0}
        radiusMax={100}
        radiusMin={20}
        value={value}
        onValueChange={setValue}
      />
    </Patch>
  );
};

BasicSynth.propTypes = {};

BasicSynth.defaultProps = {};

export default BasicSynth;
