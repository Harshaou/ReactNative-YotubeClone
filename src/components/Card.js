import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons} from '@expo/vector-icons'
import {useNavigation } from '@react-navigation/native'

const Card = ({videoId,title,channel}) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.navigate("videoPlayer", {videoId,title})}>
        <View style={styles.mainContainer} >
            <Image 
            style={{width: '100%' , height: 240}}
            source={{uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` }}
            />
            <View style={styles.container}>
                <View >
                <MaterialIcons name="account-circle" size={46} color="rgb(46, 38, 38)" />
                </View>

                <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 18, width: 315}}
                ellipsizeMode="tail"
                numberOfLines={2}
                >{title}</Text>
                <Text>{channel}</Text>
                </View>
            </View>

        </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 5,
      elevation: 4,
      marginBottom: 16,
      marginTop: 10
    },
    
  })

export default Card;
