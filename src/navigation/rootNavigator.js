import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './authNavigator';
import SignInScreen from '../screen/SignInScreen';


export default function rootNavigator() {
    return (
        <NavigationContainer>
            <AuthStack>

            </AuthStack>
        </NavigationContainer>
    )
}