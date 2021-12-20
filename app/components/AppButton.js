import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import colors from "../config/colors";

function AppButton({ title, color = "darkRed", textColor = "white", style }) {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor: colors[color] }]}
    >
      <Text style={[styles.textButton, { color: colors[textColor] }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 1,
    width: "100%",
    height: 50,
    borderRadius: 50 / 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.darkRed,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  textButton: {
    color: colors.white,
    fontSize: 16,
  },
});
export default AppButton;
