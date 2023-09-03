import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Field = ({ bgColor, placeholder }) => {
  return (
    <View style={styles.card}>
      <TextInput
        style={[styles.input, { backgroundColor: bgColor }]}
        // onChangeText={}
        // value={}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Field;

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    padding: 10,
    borderRadius: 10,
  },
});
