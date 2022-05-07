import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const LoginImg = require('../../images/login-img.png')

const Home = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('Details');
  }

  const handleSignUp = () => {
    navigation.navigate('Signup');
  }

  return (
    <ImageBackground
      source={require('../../assets/Background.png')}
      style={styles.container}
      imageStyle={{ width: '100%', height: 'auto' }}
    >
      <View style={styles.mainView}>
        <Image
          style={{ width: '80%', height: 180 }}
          source={LoginImg}
        />
        <Text style={styles.mainMessage}>Encontre um lugar para se divertir!</Text>

        <Text style={styles.orange}>-----</Text>

        <Text style={styles.center}>
          No NICE app você pode achar locais de lazer e esporte
          para se divertir com seus amigos, apenas com sua localização
          e alguns clicks :)
        </Text>

        <TouchableOpacity
          // type="button"
          onPress={handleSignIn}
          style={styles.buttonIniciar}
        >
          <Text
            style={styles.buttonText}
          >
            ENTRAR
          </Text>
        </TouchableOpacity>

        <Text>Não possui conta?
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.orange}>Cadastrar</Text>
          </TouchableOpacity>
        </Text>

        <Text>Continuar sem conta</Text>
      </View>
    </ImageBackground>
  )
}

export default Home;