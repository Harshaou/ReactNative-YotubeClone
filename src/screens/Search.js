import React, {useState } from 'react';
import { View, StyleSheet, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons,} from '@expo/vector-icons'
import {useSelector, useDispatch} from 'react-redux'

import Constant from 'expo-constants'
import MiniCard from '../components/MiniCard';

const Search = ({navigation}) => {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  
  const miniCardData = useSelector(state => {
    return state
  })

  const fetchData = () => {
    setLoading(true)
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=video&key=AIzaSyAXPU_JX6TcgOILbclucvHRg2PK5FL4BhI`)
    .then(res => res.json())
    .then(data => {
      dispatch({type: 'FETCH-DATA', payload: data.items})
      setLoading(false)
    })
  }

  return (
    <View style={styles.mainContainer} >
      <View style={styles.container} >
        <Ionicons onPress={() => navigation.goBack()} name="md-arrow-back" size={32} style={{ marginLeft: 10, marginRight:10}} />
        <TextInput
        placeholder="Search"
        style={styles.inputStyle}
        value={value}
        onChangeText={(text) => setValue(text)}
        />
        <Ionicons onPress={() => fetchData()} name="md-send" size={32} style={{marginLeft:10, marginRight:10}}/>
      </View>
      {loading ? <ActivityIndicator size='large' color="red" /> : null}
      <FlatList 
       data={miniCardData}
       renderItem={({item}) => {
         return <MiniCard 
         videoId={item.id.videoId}
         title={item.snippet.title}
         channel={item.snippet.channelTitle}
         />
       }}
       keyExtractor={item => item.id.videoId}
      />
    </View>
  )
}




const styles = StyleSheet.create({
mainContainer: {
  flex:1,
  marginTop: Constant.statusBarHeight
},
  container: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 6,
    marginBottom: 3,
    shadowOffset: {width: 0, height: 3},
    shadowColor: 'black',
    shadowOpacity: 0.3,
    backgroundColor: 'white',
    marginBottom: 5
  },
  inputStyle: {
    backgroundColor: '#e6e6e6',
    height: 35,
    borderRadius: 10,
    paddingRight: 3,
    paddingLeft: 5,
    fontSize: 18,
    flex: 2,
    width: '70%'
},
})


export default Search