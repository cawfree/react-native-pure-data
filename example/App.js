import React, {useState} from "react";
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from "react-native";
import {AudioController} from "react-native-pure-data";

import {Osc} from "./components";

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default () => {
  const [active, setActive] = useState(true);
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
        <Osc
          onOff={onOff}
        />
      </AudioController>
      <SafeAreaView />
    </View>
  );
};
