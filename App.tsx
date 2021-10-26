import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Navigation } from './src/navigation/Navigation'
import { HomeScreen } from './src/screens/HomeScreen'

export const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>

  )
}


