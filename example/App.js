import React, {useState} from "react";
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from "react-native";

// TODO: refactor top-level root
import {AudioController} from "react-native-pure-data/src";

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
      />
      <SafeAreaView />
    </View>
  );
};
