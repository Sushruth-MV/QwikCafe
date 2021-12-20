import React, { useState } from "react";
import { View, StyleSheet, Text, Switch,Checkbox} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { Dropdown } from "react-native-material-dropdown-v2-fixed";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

function SelectCafeteriaScreen(props) {
  const data = [
    {
      value: "Tamil Nadu",
    },
    {
      value: "Karnataka",
    },
    {
     value: "West Bengal",
    },
  ];
  const [isChecked, setChecked] = useState(false);

  const toggleSwitch = () => setChecked((previousState) => !previousState);

  return (
    <Screen>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center", paddingTop:12}}>
          <MaterialIcons name="arrow-back" size={26} color={colors.white} />
          <Text
            style={{ fontSize: 20, color: colors.white, paddingHorizontal: 12 }}
          >
            Cafeteria
          </Text>
        </View>
      </View>
      <View style={{ padding: 12 }}>
        <Dropdown
          containerStyle={{ marginVertical: 6 }}
          iconColor="#E1E1E1"
          label="Select State"
          data={data}
        />
        <Dropdown
          containerStyle={{ marginVertical: 6 }}
          iconColor="#E1E1E1"
          label="Select City"
          data={data}
        />
        <Dropdown
          containerStyle={{ marginVertical: 6 }}
          iconColor="#E1E1E1"
          label="Select Cafeteria"
          data={data}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {/* <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? "#4630EB" : undefined}
      /> */
        }
        <Switch
          trackColor={{ false: "#767577", true: colors.darkRed }}
          onValueChange={toggleSwitch}
          value={isChecked}
        />
        <Text style={{ fontSize: 16 }} numberOfLines={2}>
          Set this location as your default cafeteria (Recommended)
        </Text>
      </View>
      <View style={{ paddingHorizontal: 12, marginTop: 10 }}>
        <AppButton title="SUBMIT" />
      </View>
    
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkRed,
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
});

export default SelectCafeteriaScreen;
