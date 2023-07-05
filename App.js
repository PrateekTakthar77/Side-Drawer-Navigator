import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './screens/Home'
import Contact from './screens/Contact'

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen key='home' name='Home Screen' component={Home} />
        <Drawer.Screen key='contact' name='contact Screen' component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App