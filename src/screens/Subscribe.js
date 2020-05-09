import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constant from 'expo-constants'
import Header from '../components/Header'


const Suscribe = () => {
    return (
        <View style={styles.container}>
          <Header />
            <Text>Suscribe screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constant.statusBarHeight
      
    }
  })

export default Suscribe;
