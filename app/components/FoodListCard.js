import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

function FoodListCard({ title, status }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="silverware-fork-knife"
            size={24}
            color={colors.white}
          />
        </View>
        <View
          style={{
            flex: 1,
            paddingLeft: 12,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500" }}>{title}</Text>
          <Text
            style={{
              color: status === "Opened" ? "green" : colors.darkRed,
              fontSize: 16,
            }}
          >
            {status}
          </Text>
        </View>
        <Entypo name="chevron-right" size={24} color="grey" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    backgroundColor: colors.white,
    padding: 10,
    justifyContent: "center",
    borderRadius: 20,
    marginVertical: 5,
  },
  icon: {
    backgroundColor: colors.darkRed,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
});

export default FoodListCard;
