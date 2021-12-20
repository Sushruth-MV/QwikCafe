import React from "react";
import { View, StyleSheet, Text, Image, SafeAreaView } from "react-native";
import colors from "../config/colors";

function FoodCard({ title, status }) {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 150, height: 100, resizeMode: "cover" }}
        source={require("../assets/AppIcon.jpeg")}
      />
      <Text style={{ fontSize: 16 }}>{title}</Text>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: status === "Opened" ? "green" : "red",
          borderTopStartRadius: 10,
          borderTopEndRadius: 10,
          paddingHorizontal: 8,
          justifyContent: "center",
          alignItems: "center",
          width: 100,
          height: 22,
        }}
      >
        <Text style={{ color: colors.white, fontSize: 16 }}>{status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 185,
    height: 185,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 26,
    marginVertical: 12,
    overflow: "hidden",
  },
});

export default FoodCard;
