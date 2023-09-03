import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import Field from "./Field";

const Card = ({ title, icon, buttonColor, placeholder }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHead}>
        <View style={styles.cardLeft}>
          {icon}
          <Text style={styles.title}>{title}</Text>
        </View>
        <TouchableOpacity
          style={[styles.cardButton, { backgroundColor: buttonColor }]}
        >
          <Entypo name="plus" size={24} color="#2c2c2c" />
        </TouchableOpacity>
      </View>
      <Field bgColor={buttonColor} placeholder={placeholder} />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flexDirection: "column",
    gap: 10,
    marginTop: 10,
  },
  cardHead: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardButton: {
    padding: 10,
    borderRadius: 10,
  },
});
