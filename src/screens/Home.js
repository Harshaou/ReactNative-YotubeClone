import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import {useSelector} from 'react-redux'
import Constant from 'expo-constants'
import Header from '../components/Header'
import Card from '../components/Card';

const Home = () => {
  const cardData = useSelector(state => {
    return state
  })

    return (
      <View style={styles.container}>
          <Header />
          <ScrollView>

          <FlatList
          data={cardData}
          renderItem={({item}) => {
            return <Card
            videoId={item.id.videoId}
            title={item.snippet.title}
            channel={item.snippet.channelTitle}
            />
          }}
          keyExtractor={item => item.id.videoId}
          />
          </ScrollView>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant.statusBarHeight
    
  }
})


export default Home