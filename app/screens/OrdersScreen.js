import React from "react";
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from "react-native";
import {
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";

import Screen from "../components/Screen";
import colors from "../config/colors";

function OrdersScreen(props) {
  const flatListData = [
    {
      id: 1,
      title: "TT-1107-001",
      date:"11/07/2021 08:21 pm",
      status: "Food Ready",
      price: "₹15",
      rating:"5",
      
    },
    {
      id: 2,
      title: "TT-1107-001",
      date: "11/07/2021 08:21 pm",
      status: "Delivered",
      price: "₹15",
      rating: "5",
    },
    {
      id: 3,
      title: "TT-1107-001",
      date: "11/07/2021 08:21 pm",
      status: "Delivered",
      price: "₹15",
      rating: "5",
     
    },
    {
      id: 4,
      title: "TT-1107-001",
      date: "11/07/2021 08:21 pm",
      status: "Food Ready",
      price: "₹15",
      rating: "4",
    },
    {
      id: 5,
      title: "TT-1107-001",
      date: "11/07/2021 08:21 pm",
      status: "Food Ready",
      price: "₹15",
      rating: "5",
    },
    {
      id: 6,
      title: "TT-1107-001",
      date: "11/07/2021 08:21 pm",
      status: "Food Ready",
      price: "₹15",
      rating: "4",
    },
    {
      id: 7,
      title: "TT-1107-001",
      date: "11/07/2021 08:21 pm",
      status: "Food Ready",
      price: "₹15",
      rating: "4",
      feedback:"Feedback"
    },
  ];

  return (
    <Screen>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: colors.darkRed,
          height: 80,
          paddingHorizontal: 12,
          paddingTop:20
        }}
      >
        <MaterialIcons name="arrow-back" size={26} color={colors.white} />
        <Text
          style={{ fontSize: 20, color: colors.white, paddingHorizontal: 12 }}
        >
          Orders
        </Text>
      </View>

      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <FlatList
            data={flatListData}
            contentContainerStyle={{
              paddingHorizontal: 12,
            }}
            keyExtractor={(flatListData) => flatListData.id.toString()}
            renderItem={({ item }) => (
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: 100,
                    backgroundColor: colors.white,
                    paddingHorizontal: 12,
                    marginVertical: 6,

                    borderRadius: 20,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    elevation: 3,
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
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.title}</Text>
                    <Text style={{ fontSize: 12,color:'gray' }}>{item.date}</Text>
                    <Text style={{ fontSize: 14, color:'green' }}>{item.status}</Text>
                    <TouchableOpacity>
                    
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={{ fontSize: 18 }}>{item.price}</Text>
                    <View
                      style={{
                        paddingVertical: 5,
                        paddingHorizontal: 12,
                        backgroundColor: "green",
                        borderRadius: 12,
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        marginVertical: 6,
                      }}
                    >
                   
                      <Text style={{ fontSize: 14, color: "lightgrey" }}>{item.rating}</Text>
                      
                      <MaterialIcons name="star" size={16} color="white" />
                   
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </Screen>
  );
}



const styles = StyleSheet.create({
  icon: {
    backgroundColor: colors.darkRed,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
 
});

export default OrdersScreen;
