import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import colors from "../config/colors";
import FoodCard from "../screens/OrdersScreen";
import wallet from "../screens/WalletScreen";
import cart from "../screens/cart";
const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function BottomTab(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.darkRed,
        inactiveTintColor: colors.black,
        showLabel: true,
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              size={30}
              name="home"
              color={focused ? colors.darkRed : colors.black}
            />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Orders"
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              size={26}
              color={focused ? colors.darkRed : colors.black}
            />
          ),
        }}
        component={FoodCard}
      />
      <Tab.Screen
        name="Wallet"
        options={{
          tabBarLabel: "Wallet",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="account-balance-wallet"
              size={24}
              color={focused ? colors.darkRed : colors.black}
            />
          ),
        }}
        component={wallet}
      />
      <Tab.Screen
        name="Cart"
        options={{
          tabBarLabel: "Wallet",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="shopping-cart"
              size={24}
              color={focused ? colors.darkRed : colors.grey}
            />
          ),
        }}
        component={cart}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default BottomTab;
