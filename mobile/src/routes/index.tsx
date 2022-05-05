import React from 'react'
const { Navigator, Screen } = createNativeStackNavigator(); // Gerancia o 'Rotemaento da aplicação'
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // navegação por botões

import Home from '../pages/Home';
import Main from '../pages/Main';
import Details from '../pages/Details';
import { NavigationContainer } from '@react-navigation/native';

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Screen name='Home' component={Home} />
        <Screen name='Main' component={Main} />
        <Screen name='Details' component={Details} />

      </Navigator>
    </NavigationContainer>
  )
}

export default Routes