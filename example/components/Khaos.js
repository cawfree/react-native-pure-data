import React, {useCallback, useState} from "react";
import PropTypes from "prop-types";
import {Patch} from "react-native-pure-data";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import {Dial} from "react-native-dial";

import khaos from "../patches/khaos.pd";

const maxRadius = 50;
const minRadius = 20;
const diffRadius = maxRadius - minRadius;

const styles = StyleSheet.create({
  container: {width: 300, backgroundColor: 'green'},
  row: {width: 300, flexDirection: 'row'},
});

const KhaosDial = ({...extraProps}) => (
  <Dial
    initialRadius={(diffRadius / 100 + minRadius)}
    radiusMax={maxRadius}
    radiusMin={minRadius}
    {...extraProps}
  />
);

const Khaos = () => {
  const [baseFrequency, setBaseFrequency] = useState(500);
  const [pwm, setPwm] = useState(50);
  const [frequency, setFrequency] = useState(600);
  const [q, setQ] = useState(100);
  const [rate, setRate] = useState(10);
  const [depth, setDepth] = useState(20);
  const [delay, setDelay] = useState(10);
  return (
    <Patch
      source={khaos}
      baseFrequency={baseFrequency}
      pwm={pwm}
      frequency={frequency}
      Q={q}
      rate={rate}
      depth={depth}
      delay={delay}
    >
      <View
        style={styles.container}
      >
        <View
          style={styles.row}
        >
          <KhaosDial
            value={baseFrequency}
            onValueChange={setBaseFrequency}
          />
          <KhaosDial
            value={pwm}
            onValueChange={setPwm}
          />
        </View>
        <View
          style={styles.row}
        >
          <KhaosDial
            value={frequency}
            onValueChange={setFrequency}
          />
          <KhaosDial
            value={q}
            onValueChange={setQ}
          />
        </View>
        <View
          style={styles.row}
        >
          <KhaosDial
            value={rate}
            onValueChange={setRate}
          />
          <KhaosDial
            value={depth}
            onValueChange={setDepth}
          />
        </View>
        <View
          style={styles.row}
        >
          <KhaosDial
            value={delay}
            onValueChange={setDelay}
          />
        </View>
      </View>
    </Patch>
  );
};

Khaos.propTypes = {
};

Khaos.defaultProps = {
};

export default Khaos;
