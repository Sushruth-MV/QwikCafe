import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import BottomTab from "./BottomTab";
import colors from "../config/colors";
import profile from "../screens/ProfileScreen";
import orders from "../screens/OrderDetailsScreen";
import cafeteria from "../screens/SelectCafeteriaScreen";
import logout from "../components/CustomAlert";
const Drawer = createDrawerNavigator();

function DrawerHome() {
  return (
    <View>
      <Text>Home on Drawer</Text>
    </View>
  );
}

function DrawerNavigator(props) {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: colors.white,
        inactiveTintColor: colors.white,
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        options={{
          title: "Home",

          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="home" size={24} color={colors.white} />
          ),
        }}
        component={BottomTab}
      />
      <Drawer.Screen
        options={{
          title: "Profile",

          drawerIcon: ({ focused, size }) => (
            <FontAwesome5 name="user-alt" size={24} color={colors.white} />
          ),
        }}
        name="Profile"
        component={profile}
      />
      <Drawer.Screen
        options={{
          title: "Change Cafeteria",
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons
              name="edit-location"
              size={24}
              color={colors.white}
            />
          ),
        }}
        name="Change Cafeteria"
        component={cafeteria}
      />
      <Drawer.Screen
        options={{
          title: "Orders",
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              size={24}
              color={colors.white}
            />
          ),
        }}
        name="Orders"
        component={orders}
      />
      <Drawer.Screen
        options={{
          title: "Wallet",
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons
              name="account-balance-wallet"
              size={24}
              color={colors.white}
            />
          ),
        }}
        name="Wallet"
        component={DrawerHome}
      />
      <Drawer.Screen
        options={{
          title: "Logout",
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="logout" size={24} color={colors.white} />
          ),
        }}
        name="Logout"
        component={logout}
      />
    </Drawer.Navigator>
  );
}

function CustomDrawer(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={require("../assets/AppIcon.jpeg")}
        style={{
          resizeMode: "center",
          width: "100%",
          height: 100,
          alignSelf: "center",
        }}
      />
      <LinearGradient style={{ flex: 1 }} colors={["#ff8080", "#d11f3a"]}>
      
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <View style={{ borderWidth: 0.56, borderColor: colors.white }} />
          <DrawerItem
            label="Version:1.0.13"
            labelStyle={{ color: colors.white }}
           
          />
         
          <DrawerItem
            label="Terms and Conditions"
            labelStyle={{ color: colors.white }}
          />
          <DrawerItem
            label="Privacy Policy"
            labelStyle={{ color: colors.white }}
          />
          <DrawerItem label="About Us" labelStyle={{ color: colors.white }} />
          <DrawerItem label="Contact Us" labelStyle={{ color: colors.white }} />
        </DrawerContentScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default DrawerNavigator;
