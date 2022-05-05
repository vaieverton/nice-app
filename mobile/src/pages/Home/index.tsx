import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const LoginImg = require('../../images/login-img.png')

const Home = () => {
  const navigation = useNavigation();
  const [state, setState] = useState(true);

  const handleInitClick = () => {
    navigation.navigate('Details');
    // setState(false)
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
          onPress={handleInitClick}
          style={styles.buttonIniciar}
        >
          <Text
            style={styles.buttonText}
          >
            INICIAR
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}


export default Home;