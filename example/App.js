import React from "react";
import {StyleSheet, Text, View, SafeAreaView} from "react-native";

// TODO: refactor top-level root
import {AudioController} from "react-native-pure-data/src";

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default () => (
  <View
    style={StyleSheet.absoluteFill}
  >
    <SafeAreaView />
    <View
      style={styles.container}
    >
      <Text
        children="Hello!"
      />
    </View>
    <AudioController
    />
    <SafeAreaView />
  </View>
);
