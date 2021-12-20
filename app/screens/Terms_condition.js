import React, { Component } from 'react';
import Screen from "../components/Screen";
import { Text, View, StyleSheet, ScrollView } from 'react-native';
export default class myApp extends Component {
    render() {
        return (
<Screen>
            <ScrollView>

                <View style={styles.terms}>

                    <Text style={styles.text}>Terms & Condition</Text>
                </View>

                    <Text style={styles.content1}>1) By using this App, you consent and agree to terms and conditions contained in this agreement. These terms and conditions apply to the use of the website / App and services of QwikCafe.{'\n'}

                    2) The Terms and conditions on this site can be changed at the sole discretion of the management and you are required to keep abreast of the changes in the terms and conditions from time to time.{'\n'}
                    3) By registering or by placing the order as a guest or registered user, you expressly agree that any information that you provide now or in the future is accurate. Misrepresentation of information in any form can make you liable for legal prosecution.{'\n'}


                    4) We retain the right to terminate your account based on the input received from your employer without any notice.{'\n'}

                    5) Wallet amount is not refundable, you have to utilize in cafeteria{'\n'}

                    6) You will be entitled for cancel the order before accepting by vendor, Once Order Accepted, No cancelation or no refund available{'\n'}

                    7) You will be entitled for a refund (to wallet) of any order only if the vendor unable to deliver your order due to unavailability of food item ordered or any other reason as mentioned by the vendor.{'\n'}

                8) You are responsible for keeping your login credentials private and not share them with anyone else. We are not responsible for the wallet balance if anyone else is using your account.{'\n'}</Text>




            </ScrollView>
            </Screen>

        )
    }
}
const styles = StyleSheet.create({

    terms: {
        backgroundColor: '#212020',


    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingBottom: 8,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 30,
        backgroundColor: "darkred",
        height: 60,
        fontSize: 16,

    },
    content: {
        paddingTop: 10,
        fontWeight: 'bold',
        color: '#313131',
        fontSize: 18,
        paddingHorizontal: 10,
        lineHeight: 25
    },
    content1: {
        paddingTop: 25,
        fontWeight: 'bold',
        color: '#313131',
        fontSize: 18,
        paddingHorizontal: 10,
        lineHeight: 25
    }
})