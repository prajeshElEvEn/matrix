import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Card from "./components/Card";
import HeaderCard from "./components/HeaderCard";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderCard />
      <Card
        icon={<AntDesign name="forward" size={24} color="#2c2c2c" />}
        title="Do it"
        buttonColor="#F9E8D6"
      />
      <Card
        icon={<AntDesign name="clockcircleo" size={24} color="#2c2c2c" />}
        title="Schedule it"
        buttonColor="#F3ECD1"
      />
      <Card
        icon={<AntDesign name="user" size={24} color="#2c2c2c" />}
        title="Delegate it"
        buttonColor="#FFECBA"
      />
      <Card
        icon={<AntDesign name="delete" size={24} color="#2c2c2c" />}
        title="Delete it"
        buttonColor="#DBE6E3"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 10,
  },
});
