import React from 'react'
const { Navigator, Screen } = createNativeStackNavigator(); // Gerancia o 'Rotemaento da aplicação'
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // navegação por botões

import Home from '../pages/Home';
import Main from '../pages/Main';
import Details from '../pages/Details';
import SignUp from '../pages/SignUp';

import { NavigationContainer } from '@react-navigation/native';
import SignIn from '../pages/SignIn';
import Recover from '../pages/Recover';

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
        <Screen name='Home' component={Home} />
        <Screen name='Main' component={Main} />
        <Screen name='Details' component={Details} />
        <Screen name='SignIn' component={SignIn} />
        <Screen name='SignUp' component={SignUp} />
        <Screen name='Recover' component={Recover} />


      </Navigator>
    </NavigationContainer>
  )
}

export default Routes