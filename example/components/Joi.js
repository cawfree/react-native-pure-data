import React, {useState} from "react";
import PropTypes from "prop-types";
import {View, Text, Switch, Image, StyleSheet} from "react-native";
import {Patch} from "react-native-pure-data";
import Label from "react-native-label";
import Slider from "@react-native-community/slider";

import joi from "../patches/joi.pd";

const styles = StyleSheet.create({
  labelledSwitch: {flexDirection: "row", alignItems: "center", padding: 5},
  labelText: {paddingLeft: 5, fontSize: 15, fontWeight: "bold"},
  slider: {width: 200, height: 40},
});

const LabelledSwitch = ({label, value, onChange, ...extraProps}) => (
  <View
    style={styles.labelledSwitch}
  >
    <Switch
      value={value}
      onChange={onChange}
      color="#FF0000"
    />
    <Text
      style={styles.labelText}
      children={label}
    />
  </View>
);

const Joi = () => {
  const [onOff, setOnOff] = useState(false);
  const [kick, setKick] = useState(0);
  const [snare, setSnare] = useState(0);
  const [bass, setBass] = useState(0);
  const [gamelan, setGamelan] = useState(0);
  const [lead, setLead] = useState(0);
  const [tuning, setTuning] = useState(10);
  return (
    <Label
      containerStyle={{
        flex: 1,
        borderRadius: 15,
        overflow: "hidden",
      }}
      style={{
        fontSize: 60,
        fontWeight: "bold",
      }}
      title="Joi"
      distance={100}
    >
      <Image
        style={StyleSheet.absoluteFill}
        source={{uri: "https://t3.ftcdn.net/jpg/01/68/33/76/240_F_168337653_BFaUjGRpNpO3rSB7lZSI2AGGhfLarwyt.jpg"}}
      />
      <Patch
        source={joi}
        tuning={tuning}
        onOff={onOff ? 1 : 0}
        kick={kick}
        snare={snare}
        bass={bass}
        gamelan={gamelan}
        lead={lead}
      />
      <View
        style={{
          flex: 1,
          padding: 15,
        }}
      >
        <LabelledSwitch
          label="On/Off"
          value={onOff}
          onChange={() => setOnOff(!onOff)}
        />
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Slider
            style={styles.slider}
            value={snare}
            onValueChange={setSnare}
            step={1}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
          <Slider
            style={styles.slider}
            value={bass}
            onValueChange={setBass}
            step={1}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
          <Slider
            style={styles.slider}
            value={gamelan}
            onValueChange={setGamelan}
            step={1}
            minimumValue={0}
            maximumValue={10}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
          <Slider
            style={styles.slider}
            value={lead}
            onValueChange={setLead}
            step={0.1}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
          <Slider
            style={styles.slider}
            value={kick}
            onValueChange={setKick}
            step={1}
            minimumValue={0}
            maximumValue={200}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
          <Slider
            style={styles.slider}
            value={tuning}
            onValueChange={setTuning}
            step={1}
            minimumValue={2}
            maximumValue={20}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
        </View>
      </View>
    </Label>
  );
};

Joi.propTypes = {};
Joi.defaultProps = {};

export default Joi;
