import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import { colors, parameters, title } from '../global/style'
import { Icon, Button, SocialIcon } from 'react-native-elements'
import Header from '../component/Header'

import * as Animatabe from 'react-native-animatable'

export default function SignInScreen(navigation) {

    const [textInput2Fossued, setText2Fossued] = useState(false)
    const TextInput1 = useRef(1)
    const TextInput2 = useRef(2)
    return (
        <View style={styles.container}>

            <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation}></Header>

            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text style={title}>Sign In</Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 10 }}>

                <Text style={styles.text1}> Please enter the email and password</Text>
                <Text style={styles.text1}> registered with your account</Text>
            </View>
            <View>

                <View>
                    <TextInput
                        style={styles.TextInput1}
                        placeholder='Email'
                        ref={TextInput1}
                    />
                </View>
                <View style={styles.TextInput2}>
                    <Animatabe.View animation={textInput2Fossued ? "" : "fadeInLeft"} duration={400}>

                        <Icon
                            name="lock"
                            iconStyle={{ color: colors.grey3 }}
                            type="material"></Icon>
                    </Animatabe.View>
                    <TextInput

                        style={{ width: "80%" }}
                        placeholder='Password'
                        ref={TextInput2}
                        onFocus={() => {
                            setText2Fossued(false)
                        }}
                        onBlur={() => {
                            setText2Fossued(true)
                        }}
                    />
                    <Animatabe.View animation={textInput2Fossued ? "" : "fadeInLeft"} duration={400}>

                        <Icon
                            name="visibility-off"
                            iconStyle={{ color: colors.grey3 }}
                            type="material"
                            style={{ marginRight: 10 }}></Icon>

                    </Animatabe.View>

                </View>

            </View>
            <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                <Button title="Sign In"
                    buttonStyle={parameters.styleButton}
                    titleStyle={parameters.buttonTitle}>

                </Button>
            </View>

            <View style={{ alignItems: "center", marginTop: 10 }}>

                <Text style={{ ...styles.text1, textDecorationLine: "underline" }}> Forgot Password?</Text>

            </View>

            <View style={{ alignItems: "center", marginTop: 10, marginBottom: 20 }}>

                <Text style={{ fontSize: 20, fontWeight: "bold" }}> OR</Text>

            </View>
            <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
                <SocialIcon title='Sign in with Facebook' button type='facebook' style={{ ...styles.SocialIcon }}></SocialIcon>
            </View>
            <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
                <SocialIcon title='Sign in with Facebook' button type='google' style={{ ...styles.SocialIcon }}></SocialIcon>
            </View>

            <View style={{ alignItems: "flex-end", marginHorizontal: 20 }}>
                <Button title="Create an Account"
                    buttonStyle={styles.createButton}
                    titleStyle={styles.createButtonTitle}>

                </Button></View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    text1: {
        color: colors.grey4,
        fontSize: 16
    },

    TextInput1: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 15

    },
    TextInput2: {
        marginTop: 5,
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        paddingLeft: 15,

    },
    SocialIcon: {
        borderRadius: 12,
        height: 50
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
        color: "#ff8c52",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 1
    }

})