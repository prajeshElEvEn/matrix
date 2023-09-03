import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Card from "./components/Card";
import HeaderCard from "./components/HeaderCard";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <HeaderCard />
      <Card
        icon={<AntDesign name="forward" size={24} color="#2c2c2c" />}
        title="Do it"
        buttonColor="#F9E8D6"
        placeholder={"To be done now"}
      />
      <Card
        icon={<AntDesign name="clockcircleo" size={24} color="#2c2c2c" />}
        title="Schedule it"
        buttonColor="#F3ECD1"
        placeholder={"To be scheduled"}
      />
      <Card
        icon={<AntDesign name="user" size={24} color="#2c2c2c" />}
        title="Delegate it"
        buttonColor="#FFECBA"
        placeholder={"To be done"}
      />
      <Card
        icon={<AntDesign name="delete" size={24} color="#2c2c2c" />}
        title="Delete it"
        buttonColor="#DBE6E3"
        placeholder={"Thy shall never do this"}
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    marginVertical: 20,
    paddingHorizontal: 20,
    gap: 10,
    // alignItems: "flex-start",
    // justifyContent: "center",
  },
});
