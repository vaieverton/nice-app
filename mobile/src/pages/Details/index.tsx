import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../../services/api';
import { Point } from '../Main';
import Loading from '../Loading';

const Photo = require('../../images/code.jpg')
const Logo = require('../../images/logo-black.png')


const Details = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const { data } = route.params;

  const [points, setPoints] = useState<Point[]>([]);

  const [point, setPoint] = useState<Point>();

  // useEffect(() => {
  //   setPoint(points.find((_point) => data.toString() === _point.id?.toString()))
  // }, [points])

  useEffect(() => {
    const fetch = async () => {
      await api.get(`/points/${data}`)
        .then((response) => {
          setPoint(response.data.point);
          setLoading(false);
        })
        .catch(() => console.log('erro'))
    }

    fetch();
  }, [])

  return (
    <>{loading ? <Loading /> : (
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
                <Text style={styles.descriptionTitle}>Descri????o: </Text>
                {point?.description}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.enderecoTitle}>Endere??o: </Text>
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
    )}
    </>

  )
}

export default Details