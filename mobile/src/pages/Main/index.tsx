import { View, Text, Image, Linking } from 'react-native'
import React, { useEffect, useState, } from 'react'
import MapView, { Callout, Marker } from 'react-native-maps';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { Button } from 'react-native-paper';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export interface Point {
  id?: number;
  name: string;
  description: string;
  whatsapp: string;
  email: string;
  endereco: string;
  image_url: any;
  latitude: number;
  longitude: number;
  items: string;
  ids?: number[];
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
  const [filteredPoints, setFilteredPoints] = useState<any[]>([]);
  const [filter, setFilter] = useState<number[]>([])
  const navigation = useNavigation();

  const handleToDetails = (id: number) => navigation.navigate('Details', {
    data: id
  });

  useEffect(() => {
    const fetch = async () => {
      await api.get('/points').then((response) => setPoints(response.data));
      await api.get('/categorias').then((response) => setCategorias(response.data));
    }

    fetch();
  }, []);

  const handleFilter = (id: number) => {
    if (filter.includes(id)) {
      setFilter((filter_) => filter_.filter((item) => item !== id));
    } else {
      setFilter((filter_) => [...filter_, id]);
    }
  }

  useEffect(() => {
    setFilteredPoints(points.filter((point) => {
      var contains = false;
      filter.forEach((_filter) => {
        if (point.items.includes(_filter.toString())) {
          contains = true;
        }
      })
      return contains;
    }))
  }, [filter]);

  const pointsToMap = filter.length > 0 ? filteredPoints : points

  return (
    <View style={{ flex: 1 }}>

      {/* <View style={styles.map}>
        <Image source={categorias[0]?.image_url} style={styles.item} />
      </View> */}
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
        {pointsToMap.map((point) => (
          <Marker
            coordinate={{ latitude: point.latitude, longitude: point.longitude }}
            title={point.name}
            description={point.description}
            onCalloutPress={() => handleToDetails(point.id)}
          >

            <Callout />
          </Marker>
        ))}
      </MapView> */}

      <View style={styles.map}>
        {pointsToMap.map((point) => <Button onPress={() => handleToDetails(point.id)}>{point.name}</Button>)}

      </View>





      <ScrollView style={styles.footer} horizontal>
        <View style={styles.flexCenter}>
          {/* <Button style={styles.item} onPress={() => handleFilter(category.id)}>

            </Button> */}
          <Button mode='text' onPress={() => Linking.openURL('http://192.168.0.8:3000/create-point')}>

            {/* <Image source={{ uri: categorias[0]?.image_url }} style={styles.image} /> */}
          </Button>


          <Text style={styles.font}>+ Ponto</Text>
        </View>
        {categorias.map((category) => (
          <View style={styles.flexCenter}>
            {/* <Button style={styles.item} onPress={() => handleFilter(category.id)}>

            </Button> */}
            <Button mode='text' onPress={() => handleFilter(category.id)}>

              <Image source={{ uri: category.image_url }} style={styles.image} />
            </Button>


            <Text style={styles.font}>{category.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}



export default MainPage