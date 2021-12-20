import React from "react";
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import colors from "../config/colors";

function CustomAlert(props) {
    return (
        <SafeAreaView
            style={{
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            <View style={styles.container}>
                <View
                    style={{
                        backgroundColor: colors.darkRed,
                        alignItems: "center",
                        borderTopStartRadius: 12,
                        borderTopEndRadius: 12,
                        paddingVertical: 12,
                    }}
                >
                    <Text style={{ fontSize: 20, color: colors.white,fontWeight:'bold' }}>Payment Method</Text>
                </View>
               
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            borderRadius: 30,
                            paddingHorizontal:20,
                            paddingVertical: 12,
                            backgroundColor: colors.darkRed,
                            marginLeft: 12,
                            marginTop:20,
                            width:110,
                        }}
                    >
                        <Text style={{ fontSize: 18, color: colors.white }}>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            borderRadius: 30,
                            paddingHorizontal: 35,
                            paddingVertical: 12,
                            backgroundColor: "green",
                            marginLeft: 12,
                            marginTop: 20,
                            width:110,
                        }}
                    >
                        <Text style={{ fontSize: 18, color: colors.white }}>PAY</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 300,
        borderWidth: 1,
        borderColor: colors.darkRed,
        borderRadius: 12,
        overflow: "hidden",
        marginTop: 300
    },
});

export default CustomAlert;
