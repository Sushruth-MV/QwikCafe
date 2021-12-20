import React from "react";
import { View, StyleSheet, Text ,Image} from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { MaterialIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import SimpleHeader from "../components/SimpleHeader";
import colors from "../config/colors";

function OrderDetailsScreen(props) {
  return (
    <Screen style={styles.container}>
      <SimpleHeader color="darkRed" iconColor="white" />
      <View style={{ height: 200, backgroundColor: colors.darkRed}}>
      <Image source={require('../assets/sweet.jpg')} style={{height:120,width:120,marginHorizontal:120}}></Image>
      <Text style={{fontSize:35,color:'white',paddingLeft:20}}>Order Details</Text>
      </View>
      <View style={{ padding: 5 }}>
        <View style={styles.cardView}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>Tea Toast</Text>
            <Text
              style={{ fontSize: 22, color: colors.darkRed, fontWeight: "700" }}
            >
              TT-1906-001
            </Text>
          </View>
          <View style={{ alignItems: "flex-end", marginVertical: 6 }}>
            <Text style={{ fontSize: 18, color: colors.grey }}>19/06/2021</Text>
          </View>
          <ProgressView />
        </View>
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
            borderRadius: 20,
            backgroundColor: "white",
            padding: 12,
            marginVertical: 12,
          }}
        >
          <View
            style={{
              flexDirection: "row",

              justifyContent: "center",
              backgroundColor: "white",
              alignSelf: "center",
              alignContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Items</Text>

              <Text
                style={{
                  fontSize: 16,
                  right: 10,
                  color: "green",
                }}
              >
                pickup
              </Text>
            </View>
          </View>
          <View
            style={{
              borderWidth: 1,
              flexDirection: "row",
              borderColor: "grey",
              marginVertical: 8,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <View>
              <Text style={{ fontSize: 16 }}>Plain Tea</Text>
              <Text style={{ fontSize: 16 }}> 2 X ₹10</Text>
            </View>
            <Text style={{ fontSize: 16 }}>₹20</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              flexDirection: "row",
              borderColor: "grey",
            }}
          />
          <View
            style={{
              top: 4,
              borderWidth: 1,
              flexDirection: "row",
              borderColor: "grey",
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 12,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Grand Total
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>₹20</Text>
          </View>
        </View>
      </View>
    </Screen>
  );
}

function ProgressView() {
  return (
    <View>
      <View style={{ flex: 1, position: "absolute" }}>
        <ProgressSteps>
          <ProgressStep removeBtnRow label="Placed">
            <View style={{ alignItems: "center" }}>
              <Text>Order is Placed</Text>
            </View>
          </ProgressStep>
          <ProgressStep removeBtnRow label="Accepted">
            
            <View style={{ alignItems: "center" }}>
              <Text>Your order is Accepted</Text>
            </View>
          </ProgressStep>
          <ProgressStep removeBtnRow label="Food Ready">
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <MaterialIcons name="check-circle" size={24} color="green" />
              <Text style={{ fontSize: 16 }}>Now you can collet your food</Text>
            </View>
          </ProgressStep>
          <ProgressStep removeBtnRow label="Delivered">
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text>This is the content within step 3!</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    height: 230,
    padding: 12,
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  container: {
    backgroundColor: "lightgrey",
  },
});

export default OrderDetailsScreen;
