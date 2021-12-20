import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";

function CustomAlert(props) {
  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: colors.darkRed,
            alignItems: "center",
            borderTopStartRadius: 12,
            borderTopEndRadius: 12,
            paddingVertical: 12,
          }}
        >
          <Text style={{ fontSize: 20, color: colors.white }}>Confirm!</Text>
        </View>
        <Text style={{ fontSize: 26, textAlign: "center", marginVertical: 12 }}>
          Do you really want to logout?
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: 30,
              paddingHorizontal: 30,
              paddingVertical: 12,
              backgroundColor: colors.darkRed,
              marginLeft: 12,
            }}
          >
            <Text style={{ fontSize: 18, color: colors.white }}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 30,
              paddingHorizontal: 30,
              paddingVertical: 12,
              backgroundColor: "green",
              marginLeft: 12,
            }}
          >
            <Text style={{ fontSize: 18, color: colors.white }}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 300,
    borderWidth: 1,
    borderColor: colors.darkRed,
    borderRadius: 12,
    overflow: "hidden",
    marginTop:300
  },
});

export default CustomAlert;
