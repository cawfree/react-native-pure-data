import React, {useState} from "react";
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from "react-native";

// TODO: refactor top-level root
import {AudioController, Patch} from "react-native-pure-data/src";

import osc from "./patches/osc.pd";

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default () => {
  const [active, setActive] = useState(false);
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
      </View>
      <AudioController
        active={active}
      >
        <Patch
          source={osc}
          onOff={1}
        />
      </AudioController>
      <SafeAreaView />
    </View>
  );
};
