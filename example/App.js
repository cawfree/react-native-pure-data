import React, {useState} from "react";
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from "react-native";
import {AudioController, Patch} from "react-native-pure-data";

import osc from "./patches/osc.pd";

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default () => {
  const [active, setActive] = useState(false);
  const [onOff, setOnOff] = useState(true);
  return (
    <View
      style={StyleSheet.absoluteFill}
    >
      <SafeAreaView />
      <View
        style={styles.container}
      >
        <TouchableOpacity
          onPress={() => setActive(!active)}
        >
          <Text
            children={active ? "Active" : "Inactive"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setOnOff(!onOff)}
        >
          <Text
            children={onOff ? "On" : "Off"}
          />
        </TouchableOpacity>

      </View>
      <AudioController
        active={active}
      >
        <Patch
          source={osc}
          onOff={onOff ? 1 : 0}
        />
      </AudioController>
      <SafeAreaView />
    </View>
  );
};
