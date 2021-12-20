import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function IconButton({ title, name }) {
  return (
    <TouchableOpacity style={styles.iconButtonContainer}>
      <MaterialIcons name={name} size={26} color={colors.darkRed} />
      <Text style={{ fontSize: 16, paddingLeft: 5, color: colors.darkRed }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  iconButtonContainer: {
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    borderColor: colors.darkRed,
    borderRadius: 25,
    height: 46,
    width: "60%",
    borderWidth: 2,
  },
});
export default IconButton;
