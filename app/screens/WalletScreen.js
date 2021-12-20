import React from "react";
import { View, Text ,StyleSheet,TouchableOpacity} from "react-native";

import colors from "../config/colors";
import SimpleHeader from "../components/SimpleHeader";
import Screen from "../components/Screen";
import wallet from "../components/CustomAlert";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

function WalletScreen(props) {
  return (
    <Screen>
     
        <View View style={{ flex: 1 }}>
          <View style={{
            backgroundColor: '#990012', height: 170,
            paddingTop: 80
          }}>
            <Text style={styles.avlbalance}>Available Balance</Text>
            <Text style={styles.balance}>₹1639</Text>
          </View>

          <View>
          <TouchableOpacity style={styles.largeButton} component={wallet} >
              <FontAwesome
                name="angle-right"
                size={20}
                color='#a9a9a9'
              ></FontAwesome>
              <View style={{ paddingLeft: 30 }}>
                <FontAwesome
                  name="plus"
                  size={20}
                  color='#000'
                ></FontAwesome>
              </View>
              <Text style={styles.largeButtontext}>
                ADD MONEY
              </Text>
            </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity style={styles.largeButton} >
              <FontAwesome
                name="angle-right"
                size={20}
                color='#a9a9a9'
              ></FontAwesome>
               
              <View style={{ paddingLeft: 30 }}>
                <FontAwesome
                  name="list"
                  size={20}
                  color='#000'
               />
              </View>
              <Text style={styles.largeButtontext}>
                Transactions
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.largeButton} onPress={() => { Alert.alert('Wallet'); }}>
              <FontAwesome
                name="angle-right"
                size={20}
                color='#a9a9a9'
              ></FontAwesome>
              <View style={{ paddingLeft: 30 }}>
                <FontAwesome
                  name="clipboard"
                  size={20}
                  color='#000'
                ></FontAwesome>
              </View>
              <Text style={styles.largeButtontext}>
                Statement
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeButton: {
    backgroundColor: 'white',
    height: 60,
    marginTop: 20,
    marginHorizontal: 20,
    elevation: 5,
    borderRadius: 4,
    paddingVertical: 16,
    paddingLeft: 20,
    flexDirection: 'row'

  },
  largeButtontext: {
    color: 'black',
    fontWeight: 'bold',
    paddingLeft: 1

  },
  avlbalance: {
    color: '#E5E4E2',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: "bold"
  },
  balance: {
    color: '#ffff',
    textAlignVertical: 'center',
    textAlign: 'center',

    fontSize: 40

  }
});

export default WalletScreen;
