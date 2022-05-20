import { View, Text } from 'react-native'
import React from 'react'
import MapView, { Callout, Marker } from 'react-native-maps'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';

const store = {
  latitude: -3.061068,
  longitude: -59.9994999,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const MainPage = () => {
  const navigation = useNavigation();

  const handleToDetails = () => navigation.navigate('Details')

  return (
    <View style={{flex: 1}}>
      <MapView
        loadingEnabled={true}
        style={styles.map}
        region={{
          latitude: -3.061068,
          longitude: -59.9994999,
          latitudeDelta: 0,
          longitudeDelta: 0.13

        }}
      >
        <Marker coordinate={store}
        title="Incena"
        description="This is a description">
          <Callout />
        </Marker>
      </MapView>
      <Text>Ok</Text>
    </View>
  )
}



export default MainPage