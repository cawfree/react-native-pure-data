import React, {useState} from "react";
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Switch} from "react-native";
import {AudioController} from "react-native-pure-data";

import {Osc} from "./components";

const styles = StyleSheet.create({
  container: {flex: 1, padding: 15},
});

export default () => {
  const [active, setActive] = useState(true);
  const [onOff, setOnOff] = useState(true);
  return (
    <AudioController
      active={active}
    >
      <View
        style={StyleSheet.absoluteFill}
      >
        <ScrollView
          style={styles.container}
        >
          <SafeAreaView />
          <Switch
            onChange={() => setActive(!active)}
            value={active}
          />
          <TouchableOpacity
            onPress={() => setOnOff(!onOff)}
          >
            <Text
              children={onOff ? "On" : "Off"}
            />
          </TouchableOpacity>
          <Osc
            onOff={onOff}
          />
          <SafeAreaView />
        </ScrollView>
      </View>
    </AudioController>
  );
};
