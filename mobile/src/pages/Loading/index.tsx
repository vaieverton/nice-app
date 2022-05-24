import { View } from 'react-native'
import React from 'react'


import { StyleSheet } from "react-native";
import { ActivityIndicator } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const Loading = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator />
    </View>
  )
}

export default Loading