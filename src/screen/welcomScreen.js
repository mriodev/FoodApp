import { View, Text, StyleSheet, Image, } from 'react-native';
import React from 'react';
import { colors, parameters } from '../global/style';
import { Button } from 'react-native-elements'
import Swiper from 'react-native-swiper';
export default function welcomScreen(navigation) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 3, justifyContent: "flex-start", alignItems: "center", paddingTop: 20 }}>
                <Text style={{ fontSize: 20, color: colors.buttons, fontWeight: 'bold' }}>DISCOVER RESTAURENTS</Text>
                <Text style={{ fontSize: 20, color: colors.buttons, fontWeight: 'bold' }}>IN YOUR AREA</Text>
            </View>

            <View style={{ flex: 4, justifyContent: "center" }}>
                <Swiper autoplay={true}>
                    <View style={styles.slide1}>
                        <Image source={{ uri: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg' }}
                            style={{ height: "100%", width: "100%" }}>

                        </Image>
                    </View>
                    <View style={styles.slide2}>
                        <Image source={{ uri: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg' }}
                            style={{ height: "100%", width: "100%" }}>

                        </Image>
                    </View>
                    <View style={styles.slide3}>
                        <Image source={{ uri: 'https://images.pexels.com/photos/2412950/pexels-photo-2412950.jpeg' }}
                            style={{ height: "100%", width: "100%" }}>

                        </Image>
                    </View>
                </Swiper>
            </View>

            <View style={{ flex: 4, justifyContent: "flex-end", marginBottom: 30 }}>
                <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                    <Button title="Sign In"
                        buttonStyle={parameters.styleButton}
                        titleStyle={parameters.buttonTitle}
                        onPress={() => {
                            navigation.navigate("SignInScreen")
                        }}>

                    </Button>
                </View>
            </View>

            <View style={{ marginBottom: 20 }}>
                <View style={{ marginHorizontal: 20 }}>
                    <Button title="Create an Account"
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}>

                    </Button>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#90DD6E8'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#90DD6E8'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#90DD6E8'
    },
    createButton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 20,
        borderColor: "#ffac52",

    },
    createButtonTitle: {
        color: colors.grey1,
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 1
    }
})