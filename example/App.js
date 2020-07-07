import React, {useState} from "react";
import {StyleSheet, Text, View, SafeAreaView, ScrollView, Switch} from "react-native";
import {AudioController} from "react-native-pure-data";

import {SheddingHydrogen, Joi} from "./components";

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 60},
  center: {alignItems: "center", justifyContent: "center"},
  separator: {height: 60},
});

export default () => {
  const [active, setActive] = useState(false);
  return (
    <AudioController
      active={active}
    >
      <ScrollView
        style={[StyleSheet.absoluteFill, styles.container]}
      > 
        <SafeAreaView />
        <View
          style={styles.center}
        >
          <Switch
            onChange={() => setActive(!active)}
            value={active}
          />
        </View>
        <View style={styles.separator} />
        <Joi
        />
        <SafeAreaView />
      </ScrollView>
    </AudioController>
  );
};
