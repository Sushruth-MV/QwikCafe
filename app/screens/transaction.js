import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
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
            title: "REDEEM",
            item_name:"Tea Tost",
            date:"19/06/2021 07:58pm",
            status: "SUCCESS",
            price: "₹25",
        },
        {
            id: 2,
            title: "REDEEM",
            item_name: "Tea Tost",
            date: "19/06/2021 07:58pm",
            status: "SUCCESS",
            price: "₹15",
        },
        {
            id: 3,
            title: "LOAD",
            item_name: "Tea Tost",
            date: "19/06/2021 07:58pm",
            status: "SUCCESS",
            price: "₹10",
        },
        {
            id: 4,
            title: "REDEEM",
            item_name: "Tea Tost",
            date: "19/06/2021 07:58pm",
            status: "SUCCESS",
            price:"₹15",
        },
        {
            id: 5,
            title: "REDEEM",
            item_name: "Tea Tost",
            date: "19/06/2021 07:58pm",
            status: "SUCCESS",
            price: "₹15",
        },
        {
            id: 6,
            title: "REDEEM",
            item_name: "Tea Tost",
            date: "19/06/2021 07:58pm",
            status: "SUCCESS",
            price: "₹15",
        },
        {
            id: 7,
            title: "CANCEL REDEEM",
            item_name: "Tea Tost",
            date: "19/06/2021 07:58pm",
            status: "SUCCESS",
            price: "₹15",
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
                    paddingTop: 20
                }}
            >
                <MaterialIcons name="arrow-back" size={26} color={colors.white} />
                <Text
                    style={{ fontSize: 20, color: colors.white, paddingHorizontal: 12 }}
                >
                    Transaction
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
                                        height: 90,
                                        backgroundColor: colors.white,
                                        paddingHorizontal: 12,
                                        marginVertical: 6,

                                        borderRadius: 10,
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
                                   
                                    <View
                                        style={{
                                            flex: 1,
                                            paddingLeft: 12,
                                            justifyContent: "center",
                                            
                                            
                                        }}
                                    >
                                        <Text style={{ fontSize: 14, fontWeight: "500",color:'red' }}>{item.title}</Text>
                                        <Text style={{ fontSize: 12, fontWeight: "500" ,color:'black'}}>{item.item_name}</Text>

                                        <Text style={{ fontSize: 12 ,color:'gray'}}>{item.date}</Text>
                                        <Text style={{ fontSize: 12, fontWeight: "500",color:'green' }}>{item.status}</Text>
                                        
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 18,color:'black',fontWeight:"bold" }}>{item.price}</Text>
                                       
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
