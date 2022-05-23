import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../../services/api';
import { Point } from '../Main';

const Photo = require('../../images/code.jpg')
const Logo = require('../../images/logo-black.png')

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { data } = route.params;

  const [points, setPoints] = useState<Point[]>([]);

  const [point, setPoint] = useState<Point>();

  useEffect(() => {
    setPoint(points.find((_point) => data.toString() === _point.id?.toString()))
  }, [points])

  useEffect(() => {
    const fetch = async () => {
      await api.get(`/points`)
      .then((response) => setPoints(response.data))
      .catch(() => console.log('erro'))
    }

    fetch();
  }, [])

  return (
    <ImageBackground
      source={require('../../assets/Background.png')}
      style={styles.bckimg}
      imageStyle={{ width: '100%', height: 'auto' }}
    >
      <ScrollView>
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
            source={{
              uri: point?.image_url
            }}
          />

          <View style={{ width: '100%', alignItems: 'flex-start' }}>
            <Text style={styles.title}>{point?.name}</Text>

            <Text style={styles.text}>
              <Text style={styles.descriptionTitle}>Descrição: </Text>
              {point?.description}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.enderecoTitle}>Endereço: </Text>
              {point?.endereco}
            </Text >

            <Text style={styles.text}>
              <Text style={styles.phone}>Telefone: </Text>
              {point?.whatsapp}
            </Text >
          </View>

        </View>
      </ScrollView>
    </ImageBackground>
  )
}

export default Details