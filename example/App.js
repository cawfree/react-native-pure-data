import React, {useState} from "react";
import {StyleSheet, Text, View, SafeAreaView, ScrollView, Switch} from "react-native";
import {AudioController} from "react-native-pure-data";

import {Osc} from "./components";

const styles = StyleSheet.create({
  container: {flex: 1, padding: 15},
});

export default () => {
  const [active, setActive] = useState(false);
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
          <Osc
            onOff
          />
          <SafeAreaView />
        </ScrollView>
      </View>
    </AudioController>
  );
};
