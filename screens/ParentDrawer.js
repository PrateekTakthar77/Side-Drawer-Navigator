import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './Home'
import Contact from './Contact'

const Drawer = createDrawerNavigator();


const ParentDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen key='home' name='Home Screen' component={Home} />
        <Drawer.Screen key='contact' name='contact Screen' component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default ParentDrawer

const styles = StyleSheet.create({})