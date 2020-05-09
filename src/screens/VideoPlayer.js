import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import Constant from 'expo-constants'
import Header from '../components/Header'

const VideoPlayer = ({route}) => {
  const {videoId, title} = route.params
    return (
        <View style={styles.container}>
          <Header />
            <View style={styles.webView}>
              <WebView
              source={{uri: `https://www.youtube.com/embed/${videoId}`}}
              />
            </View>
            <View>
            <Text style={styles.textView}
            numberOfLines={2}
            ellipsizeMode="tail"
            >{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constant.statusBarHeight
    },
    webView: {
      width: '100%',
      height: 200
    },
    textView: {
      fontSize: 20,
      width: Dimensions.get("screen").width - 50,
      margin: 10
    }
  })

export default VideoPlayer;
