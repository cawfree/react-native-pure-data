import React, {useState} from "react";
import {StyleSheet, Text, View, SafeAreaView, ScrollView, Switch} from "react-native";
import {AudioController} from "react-native-pure-data";

import {Osc, BasicSynth, Idiotique, SheddingHydrogen, Helicopter, Khaos} from "./components";

const styles = StyleSheet.create({
  container: {flex: 1, padding: 15},
});

export default () => {
  const [active, setActive] = useState(true);
  return (
    <AudioController
      active={active}
    >
      <View
        style={StyleSheet.absoluteFill}
      >
        <View
          style={styles.container}
        >
          <SafeAreaView />
          <Switch
            onChange={() => setActive(!active)}
            value={active}
          /> 
          <SheddingHydrogen />
          <SafeAreaView />
        </View>
      </View>
    </AudioController>
  );
};

//<Helicopter
//            rotorSpeed={0.1}
//          />

//<SheddingHydrogen
//            onOff
//          />
//<Idiotique
//  onOff
///>
//<BasicSynth
///>
//<Osc
//  onOff
///>
