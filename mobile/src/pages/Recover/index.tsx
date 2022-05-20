import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, TextInput, View, Text, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';

import api from '../../services/api';
import styles from './styles';

const Photo = require('../../images/code.jpg')
const Logo = require('../../images/logo-black.png')
const Banner = require('../../images/recover.png')


export default function Recover() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    await api.put('/users', { email, username, password }).then((response) => {
      if (response.data.message === "Ok") {
        // setStatus(true);
      }
    })
    // .catch((error) => setMsg(error.toString()));
  };

  return (
    <ImageBackground
      source={require('../../assets/Background.png')}
      style={styles.container}
      imageStyle={{ width: '100%', height: 'auto' }}
    >
      <View style={styles.mainView}>
        <View style={styles.header}>
          <Button onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>{'<'}</Text>
          </Button>
          <Image
            source={Logo}
            style={styles.logo}
          />
        </View>
        <Text style={styles.mainText}>
          Recuperar senha
        </Text>

        <Image
          source={Banner}
          style={styles.banner}
        />

        <TextInput
          placeholder='Confirmar usuário'
          onChangeText={(e) => setUsername(e)}
          style={styles.field}
        />
        <TextInput
          placeholder='Confirmar e-mail'
          onChangeText={(e) => setEmail(e)}
          style={styles.field}
        />
        <TextInput
          placeholder='Nova senha'
          onChangeText={(e) => setPassword(e)}
          style={styles.field}
        />

        <Button style={styles.buttonSubmit} onPress={handleSubmit}>
          <Text style={{ color: 'white', fontSize: 16 }}>Atualizar</Text>
        </Button>
      </View>
    </ImageBackground>
  )
}