import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, TextInput, View, Text, ImageBackground } from 'react-native';
import { Button, Dialog, Paragraph } from 'react-native-paper';

import api from '../../services/api';
import { styles } from './styles';

const Photo = require('../../images/code.jpg')
const Logo = require('../../images/logo-black.png')

export default function SignUp() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    await api.post('/users', { email, username, password }).then((response) => {
      if (response.data.message === "Ok") {
        setStatus('success');
      }
      if (response.data.message === "Ja existe") {
        setStatus('warning')
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
          Crie sua conta
        </Text>

        <TextInput
          placeholder='Usuário'
          onChangeText={(e) => setUsername(e)}
          style={styles.field}
        />
        <TextInput
          placeholder='Email'
          onChangeText={(e) => setEmail(e)}
          style={styles.field}
        />
        <TextInput
          placeholder='Senha'
          onChangeText={(e) => setPassword(e)}
          style={styles.field}
        />

        <Button style={styles.buttonSubmit} onPress={handleSubmit}>
          <Text style={{ color: 'white', fontSize: 20 }}>Cadastrar-se</Text>
        </Button>
      </View>



      <Dialog visible={status === 'success'} onDismiss={() => setStatus('')}>
        <Dialog.Title>Conta pronta para uso!</Dialog.Title>
        <Dialog.Content>
          <Paragraph>Logue com seu usuário e senha.</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => navigation.navigate('SignIn')}>Entrar</Button>
        </Dialog.Actions>
      </Dialog>

      <Dialog visible={status === 'warning'} onDismiss={() => setStatus('')}>
        <Dialog.Title>Usuário já existente!</Dialog.Title>
        <Dialog.Content>
          <Paragraph>Mude o seu nome de usuário ou o email usado.</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => setStatus('')}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </ImageBackground>
  )
}