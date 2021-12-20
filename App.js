import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import BottomTab from "./app/navigators/BottomTab";
import DrawerNavigator from "./app/navigators/Drawer";
import CreateAccountScreen from "./app/screens/CreateAccountScreen";
import HomeScreen from "./app/screens/HomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import SelectCafeteriaScreen from "./app/screens/SelectCafeteriaScreen";
import CustomAlert from "./app/components/CustomAlert";
import OrdersScreen from "./app/screens/OrdersScreen";
import OrderDetailsScreen from "./app/screens/OrderDetailsScreen";
import WalletScreen from "./app/screens/WalletScreen";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
