import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import colors from "../config/colors";
import SimpleHeader from "../components/SimpleHeader";

function ProfileScreen(props) {
  return (
    <Screen>
      <View style={{ padding: 20, backgroundColor: colors.darkRed }}>
        <SimpleHeader color="darkRed" iconColor="white" />
      </View>
      <View style={styles.parent}>
        <View style={styles.child}>
          <FontAwesome name="user-circle" size={100} color={colors.white} />
          <View style={styles.iconStyle}>
            <MaterialCommunityIcons
              name="briefcase"
              size={24}
              color={colors.darkRed}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        <View style={{ flexDirection: "row", marginVertical: 8 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Name</Text>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{"\t"} :</Text>
          <Text style={{ fontSize: 16 }}> Srinivasa</Text>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 8 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>E-Mail ID </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}> :</Text>
          <Text style={{ fontSize: 16 }}> devisereddy@gmail.com</Text>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 8 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Mobile no</Text>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}> :</Text>
          <Text style={{ fontSize: 16 }}> 9900977166</Text>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 8 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>DOB {"  "}</Text>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{"\t"} :</Text>
          <Text style={{ fontSize: 16 }}> Jun 18</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 8,
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>Mobile no</Text>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}> :</Text>
            <Text style={{ fontSize: 16 }}> 9900977166</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: colors.darkRed,
              paddingHorizontal: 12,
              paddingVertical: 2,
              borderRadius: 20,
            }}
          >
            <MaterialCommunityIcons
              name="pencil"
              size={24}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 8,
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>Password</Text>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}> :</Text>
            <Text style={{ fontSize: 16 }}> *******</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: colors.darkRed,
              paddingHorizontal: 12,
              paddingVertical: 2,
              borderRadius: 20,
            }}
          >
            <MaterialCommunityIcons
              name="pencil"
              size={24}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  parent: {
    height: "40%",
    width: "100%",
    transform: [{ scaleX: 2 }],
    borderBottomStartRadius: 900,
    borderBottomEndRadius: 900,
    overflow: "hidden",
  },
  child: {
    flex: 1,
    transform: [{ scaleX: 0.5 }],
    backgroundColor: colors.darkRed,
    alignItems: "center",
    justifyContent: "center",
  },
  iconStyle: {
    position: "absolute",
    right: 140,
    top: 180,
    borderWidth: 1,
    borderColor: colors.darkRed,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 4,
  },
});

export default ProfileScreen;
