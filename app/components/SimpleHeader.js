import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function SimpleHeader({ color = "white", iconColor = "black" }) {
  return (
    <View style={[styles.container, { backgroundColor: colors[color] }]}>
      <MaterialIcons name="arrow-back" size={26} color={colors[iconColor]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 34,
    justifyContent: "center",
  },
});

export default SimpleHeader;
