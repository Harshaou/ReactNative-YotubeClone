import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {useNavigation } from '@react-navigation/native'

const MiniCard = ({videoId,title,channel}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate("videoPlayer", {videoId, title})}>
        <View style={styles.mainContainer}>
            <Image 
            style={{width: '30%' , height: 100,}}
            source={{uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` }}
            />
            <View style={styles.container}>

                <View style={{marginLeft: 5}}>
                <Text style={{fontSize: 16, marginBottom: 2}}
                ellipsizeMode="tail"
                numberOfLines={2}
                >{title} </Text>
                
                <Text style={{fontSize: 12}}>{channel} </Text>
                <Text style={{fontSize: 12}}>7 months ago . 12k views</Text>
                </View>
            </View>

        </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        margin: 10,
        marginTop: 0
    },
    container: {
      margin: 5,
      width: 240
    },
    
  })

export default MiniCard;
