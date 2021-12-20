import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Screen from "../components/Screen";
export default class myApp extends Component {
    render() {
        return (

<Screen>
            <ScrollView>
                <View style={styles.terms}>

                    <Text style={styles.text}>Contact Us</Text>
                </View>
                <View style={styles.frame}>
                    <Text style={styles.head}>Phone</Text>
                    <Text style={styles.body}>080 6718 1401</Text>
                </View>
                <View style={styles.frame}>
                    <Text style={styles.head}>Email</Text>
                    <Text style={styles.body}>support@woohoo.in</Text>
                </View>
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
    frame: {
        marginTop: 25,
        height: 75,
        borderBottomColor: '#c0c0c0',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        borderWidth: 0.5
    },
    head: {
        color: 'black',
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingVertical: 5
    },
    body: {
        fontWeight: 'bold',
        paddingLeft: 10,
        color: 'black'
    }

})