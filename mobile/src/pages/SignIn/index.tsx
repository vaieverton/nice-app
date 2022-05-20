import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, TextInput, View, Text, ImageBackground } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Dialog, Paragraph } from 'react-native-paper';
import api from '../../services/api';
import { styles } from './styles';

const Photo = require('../../images/code.jpg')
const Logo = require('../../images/logo-black.png')

export default function SignIn() {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async () => {
    setLoading(true);
    await api.post('/authentication', { username, password })
      .then((response) => {
        if (response.data.message === "Ok") {
          navigation.navigate('Main');
        }
        if (response.data.message === "Error") {
          setLoading(false);
          setError(true);
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
          <RectButton onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>{'<'}</Text>
          </RectButton>
          <Image
            source={Logo}
            style={styles.logo}
          />
        </View>
        <Text style={styles.mainText}>
          Entrar na sua conta
        </Text>

        <View style={styles.column}>
          <TextInput
            placeholder='Usuário'
            onChangeText={(e) => setUsername(e)}
            style={styles.field}
          />
          <TextInput
            placeholder='Senha'
            onChangeText={(e) => setPassword(e)}
            style={styles.field}
          />
        </View>

        <Button style={styles.buttonSubmit} onPress={handleSubmit} disabled={(!username && !password) || !password}>
          <Text style={{ color: 'white', fontSize: 20 }}>Entrar</Text>
        </Button>

        <Button onPress={() => navigation.navigate('Recover')}>
          <Text>Esqueci minha senha</Text>
        </Button>

        <Text>
          Não tem uma conta?
          <Button onPress={() => navigation.navigate('SignUp')} >
            <Text>Criar</Text>
          </Button>
        </Text>



        <Dialog visible={error} onDismiss={() => setError(false)}>
          <Dialog.Title>Erro ao logar</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Cheque seus dados</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setError(false)}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </View>
    </ImageBackground>
  )
}