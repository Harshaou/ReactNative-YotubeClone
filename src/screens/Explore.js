import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import {useSelector} from 'react-redux'
import Constant from 'expo-constants'
import Header from '../components/Header'
import Card from '../components/Card';

const Explore = () => {
  const LittileCard = ({name}) => {
    return (
      <View style={styles.littileCard}>
        <Text style={styles.littileCardText}>{name}</Text>
      </View>
    )
  }
  const cardData = useSelector(state => {
    return state
  })

    return (
        <View style={styles.container}>
          <Header />
          <ScrollView>
          <View style={styles.wrapView}>
            <LittileCard name="Trending"/>
            <LittileCard name="Sports"/>
            <LittileCard name="Gaming"/>
            <LittileCard name="Education"/>
            <LittileCard name="News"/>
            <LittileCard name="Music"/>
          </View>
          <View style={styles.exploreItem}>
            <Text style={{fontSize: 22, fontWeight: 'bold', marginBottom: 3}}>
              Trending Videos</Text>
              
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
          </View>
          </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constant.statusBarHeight
      
    },
    littileCard: {
      backgroundColor: 'red',
      height: 50,
      width: 240,
      borderRadius: 4,
      marginTop: 10,
      justifyContent: 'space-around'
    },
    wrapView: {
      flexDirection: "row",
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    },
    littileCardText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 22,
      marginTop: 5
    },
    exploreItem: {
      margin: 13,
      fontSize: 22,
      borderBottomWidth: 1
    }
  })

export default Explore;
