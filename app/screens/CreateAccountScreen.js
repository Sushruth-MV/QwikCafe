import React from "react";
import { View, StyleSheet, Text } from "react-native";

import AppButton from "../components/AppButton";
import InputText from "../components/InputText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import SimpleHeader from "../components/SimpleHeader";
import IconButton from "../components/IconButton";

function CreateAccountScreen(props) {
  return (
    <Screen>
      <SimpleHeader />
      <View
        style={{
          flex: 1,
          padding: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ color: colors.darkRed, fontWeight: "bold", fontSize: 30 }}
          >
            Qwik
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>Cafe</Text>
        </View>
        <Text style={styles.titleLogin}>Create Account</Text>
        <InputText placeholder="First Name" label="First Name" />
        <InputText placeholder="Last Name" label="Last Name" />

        <InputText placeholder="E-mail ID" label="E-mail ID" />
        <InputText
          placeholder="Enter 10 digit Mobile No."
          label="Enter 10 digit Mobile No"
        />
        <InputText placeholder="Password" label="Password" secureTextEntry />
        <InputText
          secureTextEntry
          placeholder="Re-enter Password"
          label="Re-enter Password"
        />
        <View style={{ alignSelf: "center", paddingTop: 10 }}>
          <IconButton name="camera" title="SCAN QR CODE" />
        </View>
        <View style={styles.bottomButtonContainer}>
          <AppButton title="SUBMIT" />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  appIcon: {
    alignSelf: "center",
    width: 200,
    height: 100,
  },
  bottomButtonContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 10,
    padding: 20,
  },
  titleLogin: {
    alignSelf: "center",
    paddingTop: 10,
    color: colors.darkRed,
    fontWeight: "500",
    fontSize: 16,
  },
});

export default CreateAccountScreen;
