import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Screen from "../components/Screen";
export default class myApp extends Component {
    render() {
        return (

<Screen>
            <ScrollView>
                <View style={styles.terms}>

                    <Text style={styles.text}>Privacy policy</Text>
                </View>

                <Text style={styles.content}> We are committed to protecting the privacy of our visitors while they interact with the content, products, and services on this mobile app.</Text>

                <Text style={styles.content}> This Privacy Policy applies to the App only. It does not apply to other websites to which we link. Because we gather certain types of information about our users, we want you to understand what information we collect about you, how we collect it, how that information is used, and how you can control our disclosure of it. You agree that your use of the App signifies your assent to this Privacy Policy. If you do not agree with this Privacy Policy, please do not use the Website/ App. Information Collected</Text>

                <Text style={styles.content}> We collect two types of information from you: 1) information that you voluntarily provide to us (e.g., through a voluntary registration process, signups or emails). 2) information that is derived through automated tracking mechanisms. This information collected is completely/ Highly confidential.</Text>

                <Text style={styles.content}>a. Voluntary Registration Information. In order to fully access this website/ App, you must first complete the registration (signup) process, during which we will collect personal information about you. The information may include your name, address, email address, phone etc. We do not collect personally identifiable information about you except when you specifically provide such information to us on a voluntary basis. By registering with us, you consent to the use and method of disclosure as described in this Privacy Policy.</Text>

                <Text style={styles.content}>b. Voluntary Information for Services and Features. We may also collect personally identifiable information when you choose to use certain other features of the app, including: 1) making purchases, 2) consenting to receive email or text messages about upcoming promotions or events. When you choose to use these additional features, we require you to provide your Contact Information in addition to other personal information that may be required to complete a transaction such as your phone number, billing and shipping addresses and credit card information. Occasionally, we may also request information such as your shopping preferences and demographics which will help us better serve you and our others users in the future.3) Consenting to access camera to read QR code to access respective Food counter menu.</Text>

                <Text style={styles.content}>c. Cookies. Our site uses "cookies" and other tracking technologies. Cookies enable us to serve secure pages to our users without asking them to sign in repeatedly. Most browsers allow you to control cookies, including whether or not to accept them and how to remove them. If a user's system is idle for a defined time, the cookie will expire, forcing the user to sign in again to continue their session. This prevents unauthorized access to the user's information while they are away from their computer. You may set most browsers to notify you if you receive a cookie, or you may choose to block cookies with your browser, but please note that if you choose to erase or block your cookies, you will need to re-enter your original user ID and password to gain access to certain parts of the Site. Third-Party Cookies: In the course of serving advertisements to this site, our third-party advertisers may place or recognize a unique "cookie" on your browser.</Text>

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
        fontSize: 18,
        paddingHorizontal: 10,
        lineHeight: 25
    }
})