import React, {useState} from "react";
import PropTypes from "prop-types";
import {View, StyleSheet, Image, Switch} from "react-native";
import Label from "react-native-label";

import {Patch} from "react-native-pure-data";

import sheddingHydrogen from "../patches/shedding-hydrogen.pd";

const SheddingHydrogen = () => (
  <Patch
    source={sheddingHydrogen}
    onOffSheddingHydrogen={1}
  />
);

export default SheddingHydrogen;
