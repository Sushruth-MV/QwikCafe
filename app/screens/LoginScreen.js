import React from "react";
import { Text, StyleSheet, ImageBackground, View } from "react-native";

import AppButton from "../components/AppButton";
import InputText from "../components/InputText";
import Screen from "../components/Screen";
import colors from "../config/colors";

function LoginScreen(props) {
  return (
    <Screen>
      <View
        style={{
          flex: 1,
          width: "100%",
          padding: 20,
        }}
      >
        <ImageBackground
          source={require("../assets/AppIcon.jpeg")}
          style={styles.appIcon}
        />
        <Text style={styles.titleLogin}>Login</Text>
        {/* //TODO:-Icon for Mail */}
        <InputText
          placeholder="Mobile/Employee ID"
          label="Mobile/Employee ID"
        />
        {/* //TODO:-Eye Button Password */}
        <InputText label="Password" placeholder="Password" secureTextEntry />
        <AppButton title="SIGN IN" />
        <Text style={styles.forgotText}>Forgot Password?</Text>
        <View style={styles.bottomButtonContainer}>
          <AppButton textColor="darkRed" color="white" title="CREATE ACCOUNT" />
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
    marginTop: "20%",
  },
  bottomButtonContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    padding: 20,
  },
  forgotText: {
    color: colors.darkRed,
    paddingTop: 20,
    alignSelf: "center",
  },
  titleLogin: {
    alignSelf: "center",
    paddingTop: "20%",
    color: colors.darkRed,
    fontWeight: "800",
    fontSize: 20,
  },
});
export default LoginScreen;
