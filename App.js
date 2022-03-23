import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { colors } from './src/global/style'
import rootNavigator from './src/navigation/rootNavigator'
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content'
        backgroundColor={colors.statusbar}></StatusBar>
      <rootNavigator></rootNavigator>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 }
})