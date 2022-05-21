import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Callout, Marker } from 'react-native-maps'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { Button } from 'react-native-paper';

interface Point {
  name: string;
  description: string;
  whatsapp: string;
  email: string;
  endereco: string;
  latitude: number;
  longitude: number;
  items: number[];
}

const store = {
  latitude: -3.061068,
  longitude: -59.9994999,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const MainPage = () => {
  const [points, setPoints] = useState<Point[]>([]);
  const [categorias, setCategorias] = useState<any[]>([]);
  const [filter, setFilter] = useState<number[]>([])
  const navigation = useNavigation();

  const handleToDetails = (id: number) => navigation.navigate('Details', {
    id
  });

  useEffect(() => {
    const fetch = async () => {
      await api.get('/points').then((response) => setPoints(response.data));
      await api.get('/categorias').then((response) => setCategorias(response.data));
    }

    fetch();
  }, []);

  const handleFilter = (id: number) => {
  }

  return (
    <View style={{ flex: 1 }}>

      {/* <Text>{points.map((item) => (
        <View>
          <Text>{item.name}</Text>
          <Text>{item.description}</Text>
          <Text>{item.endereco}</Text>
          <Text>{item.longitude}</Text>

        </View>
      ))}</Text> */}


      <View style={styles.map}></View>
      {/* <MapView
        loadingEnabled={true}
        style={styles.map}
        showsMyLocationButton
        showsScale
        showsUserLocation
        region={{
          latitude: -3.061068,
          longitude: -59.9994999,
          latitudeDelta: 0,
          longitudeDelta: 0.13

        }}
      >
        {points.map((point) => (
          <Marker
            coordinate={{ latitude: point.latitude, longitude: point.longitude }}
            title={point.name}
            description={point.description}
          >

            <Callout />
          </Marker>
        ))}
      </MapView> */}
      <View style={styles.footer}>
        {categorias.map((cat) => (
          <View style={styles.flexCenter}>
            <Button style={styles.item} onPress={() => handleFilter(cat.id)}>
            </Button>
            <Text style={styles.font}>{cat.title}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}



export default MainPage