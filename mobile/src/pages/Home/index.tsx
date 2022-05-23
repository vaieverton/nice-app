import { View, Text, Image, ImageBackground } from 'react-native'
import { Button } from 'react-native-paper';
import React from 'react'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const LoginImg = require('../../images/login-img.png')

const Home = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  }

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  }

  const handleHome = () => {
    navigation.navigate('Main');
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

        <Button
          onPress={handleSignIn}
          style={styles.buttonIniciar}
        >
          <Text
            style={styles.buttonText}
          >
            ENTRAR
          </Text>
        </Button>

        <Button compact={false} style={styles.orangeButton} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.orangeText}>Ainda não é cadastrado?</Text>
        </Button>

        <Button onPress={handleHome}>
          <Text>Continuar sem conta</Text>
        </Button>
      </View>
    </ImageBackground>
  )
}

export default Home;