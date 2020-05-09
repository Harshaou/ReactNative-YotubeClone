import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {AntDesign, Ionicons, MaterialIcons} from '@expo/vector-icons'
import { useNavigation, useTheme } from '@react-navigation/native';

const Header = () => {
  
    const navigation = useNavigation()
    return (
      <View style={styles.container}>
        
        <View style={styles.logoViewLeft}>
            <AntDesign name="youtube" size={32} color="red" />
            <Text style={styles.logoLeftText}>YouTubee</Text>
        </View>

        <View style={styles.logoViewRight}>
            <Ionicons name="md-videocam" size={26} color="rgb(46, 38, 38)" />
            <Ionicons onPress={() => navigation.navigate('search')} name="md-search" size={26} color="rgb(46, 38, 38)" />
            <MaterialIcons name="account-circle" size={26} color="rgb(46, 38, 38)" />
        </View>

      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    height: 65,
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: "space-between",
    elevation: 4,
    shadowOffset: {width: 0, height: 3},
    shadowColor: 'black',
    shadowOpacity: 0.3,
    
  },
  logoViewLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    marginLeft: 10
  },
  logoLeftText: {
    fontSize: 18,
    marginLeft: 3,
    fontWeight: 'bold'
    
  },

  logoViewRight: {
      width: 130,
      flexDirection: "row",
      marginRight: 10,
      justifyContent: "space-around"
  }
  
})


export default Header