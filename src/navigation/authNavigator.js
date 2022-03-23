import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from '../screen/SignInScreen';

const Stack = createNativeStackNavigator();

export default function authNavigation() {
    return (
        <View>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="SignInScreen" component={SignInScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}