import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';

const Photo = require('../../images/code.jpg')
const Logo = require('../../images/logo-black.png')

const Details = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../assets/Background.png')}
      style={styles.bckimg}
      imageStyle={{ width: '100%', height: 'auto' }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>{'<'}</Text>
          </TouchableOpacity>
          <Image
            source={Logo}
            style={styles.logo}
          />
        </View>
        <Image
          style={styles.image}
          source={Photo}
        />

        <View style={{ alignItems: 'flex-start' }}>
          <Text style={styles.title}>InCena Centro de Artes</Text>

          <Text style={styles.text}>
            <Text style={styles.descriptionTitle}>Descrição: </Text>
            Aulas gratuitas de ballet clássico e danças
            urbanas para jovens com idades entre 11 e 17 anos. A iniciativa é voltada
            exclusivamente para moradores da Zona Leste de Manaus.
          </Text>
          <Text style={styles.text}>
            <Text style={styles.enderecoTitle}>Endereço: </Text>
            R. Dom Bôsco, 121 - Coroado I, Manaus - AM, 69080-370
          </Text >

          <Text style={styles.text}>
            <Text style={styles.phone}>Telefone: </Text>
            (92) 984144373
          </Text >
        </View>
      </View>
    </ImageBackground>
  )
}

export default Details