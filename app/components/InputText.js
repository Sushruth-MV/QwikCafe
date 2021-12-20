import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";

import colors from "../config/colors";

function InputText({ placeholder, label, ...otherProps }) {
  return (
    <View>
      <TextInput
        mode="outlined"
        label={label}
        theme={{ colors: { primary: colors.darkRed } }}
        placeholder={placeholder}
        style={{ paddingVertical: 5 }}
        {...otherProps}
      ></TextInput>
    </View>
  );
}

export default InputText;
