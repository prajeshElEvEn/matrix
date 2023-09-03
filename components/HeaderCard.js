import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const HeaderCard = () => {
  return (
    <LinearGradient colors={["#F9E8D6", "#FFECBA"]} style={styles.card}>
      <Text style={styles.title}>Hi Chief 💀</Text>
      <Text style={styles.subTitle}>Let's get this started!</Text>
    </LinearGradient>
  );
};

export default HeaderCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: "column",
    borderRadius: 10,
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C2C2C",
  },
  subTitle: {
    fontSize: 14,
    color: "#22222",
  },
});
