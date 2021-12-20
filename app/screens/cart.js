import React, { useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity,Image,StatusBar,TextInput,Alert,SafeAreaView,ScrollView} from "react-native";
import { MaterialIcons,FontAwesome5 } from "@expo/vector-icons";

import colors from "../config/colors";

import Screen from "../components/Screen";



function SelectCafeteriaScreen(props) {


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
                    Cart
                </Text>
            </View>
            <View style={{backgroundColor:'white',borderRadius:10,elevation:5,margin:15}}>
            <View style={{flexDirection:'row',paddingHorizontal:15,paddingVertical:20}}>
                <Image source={require('../assets/sweet.jpg')} style={{ height: 80, width: 80,borderRadius:10}}></Image>
<Text style={{paddingLeft:20,alignSelf:'center',fontWeight:'bold',fontSize:16}}>Tea Toast</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal:15,paddingVertical:20}} >
                    <Text style={{ color:'black', fontSize: 16,fontWeight: 'bold'}}>Wallet Balance: ₹1639</Text>
                <TouchableOpacity style={{backgroundColor:'darkred',borderRadius:30,marginLeft:100}}>
                    <Text style={{color:'white',fontSize:16,paddingHorizontal:25,fontWeight:'bold',paddingVertical:3}}>
                        ADD
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={{ backgroundColor: 'white', borderRadius: 10, elevation: 5, marginHorizontal:15 }}>

<Text style={{fontWeight:'bold',padding:10,borderBottomColor:'black',borderBottomWidth:1,marginHorizontal:10,fontSize:18}}>Items</Text>
<View style={{flexDirection:'row',padding:10}}>
                    <MaterialIcons name="circle" size={22} color="green" />
                    <Text style={{ marginHorizontal: 10, fontSize: 13,fontWeight:'600' }}>Plain Tea</Text>
                </View>
                <View style={{ flexDirection: 'row',padding:10,borderBottomWidth:1,marginHorizontal:10}}>
                    <Text style={{fontWeight:'bold'}}>₹10</Text>
                    <View style={{flexDirection:'row',borderColor:'darkred',borderWidth:2,marginLeft:250,backgroundColor:'darkred',borderRadius:5}}>
                    <TouchableOpacity>
                        <FontAwesome5 name="minus-square" size={22} color="white" />
                        </TouchableOpacity>
                        <Text style={{paddingHorizontal:8,backgroundColor:'white',paddingVertical:1}}>1</Text>
                        <TouchableOpacity>
                        <FontAwesome5 name="plus-square" size={22} color="white"  />
                        </TouchableOpacity>
                    </View>
                    
                    </View>
                <View style={{ flexDirection: 'row', padding: 10, borderTopWidth: 1, marginHorizontal: 10,marginTop:5 }}>
                    <Text style={{ fontWeight: 'bold',fontSize:16 }}>Grand Total</Text>
                    <Text style={{ fontWeight: 'bold',marginLeft:200 }}>₹10.00</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',marginTop:257,alignItems:'center',backgroundColor:'white',borderWidth:1.5,borderColor:'darkred',width:"100%",height:60,borderTopRightRadius:10,borderTopLeftRadius:10}}>
                <TouchableOpacity>
                    <Text style={{color:'darkred',paddingHorizontal:10,marginLeft:20}}>+Add order note</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center'}}>
                    <Text style={{backgroundColor:'darkred',height:50,width:230,borderRadius:40,textAlign:'center',paddingVertical:12,marginLeft:15,color:'white',margin:5}}>PLACE ORDER:₹10</Text>
                </TouchableOpacity>

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
