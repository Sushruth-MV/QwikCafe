import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Screen from "../components/Screen";
export default class myApp extends Component {
    render() {
        return (

<Screen>
            <ScrollView>
                <View style={styles.terms}>

                    <Text style={styles.text}>About Us</Text>
                </View>

                <Text style={styles.content}>Qwikcilver presents QwikCafe, an app that seamlessly connects you to cafeteria, that offers a range of fresh, wholesome and nutritious food and beverages. The QwikCafe mobile app is the quickest and the most convenient way to view menus, order food, make hassle-free, secure payments and collect your orders at Cafeterias in Corporates, Business Parks and Food Courts in Malls.</Text>

                <Text style={styles.content}>Go ahead! Order food from your desk and be notified when your order is ready to be collected! Save time, Eat good food today, tomorrow, everyday!</Text>

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
        backgroundColor: '#B22222',
        height: 60,
        fontSize: 16
    },
    content: {
        paddingTop: 25,
        fontWeight: 'bold',
        color: '#313131',
        fontSize: 16,
        paddingHorizontal: 10,
        lineHeight: 25
    }
})