import React, { Component } from 'react'
import { Provider } from  'react-redux'
import {createStore} from 'redux'
import {NavigationContainer, DarkTheme, DefaultTheme} from'@react-navigation/native'
import {createStackNavigator} from'@react-navigation/stack'
import { createBottomTabNavigator } from'@react-navigation/bottom-tabs'
import { MaterialIcons} from '@expo/vector-icons'
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import VideoPlayer from './src/screens/VideoPlayer';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';
import reducer from './src/reducers'
import devToolsEnhancer from 'remote-redux-devtools';



const App = () =>  {
  
    const Stack = createStackNavigator()
    const Tab = createBottomTabNavigator()
    const store = createStore(reducer, devToolsEnhancer());


    const RootHome = () => {
      return (
        <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({  color}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home'
            } else if (route.name === 'explore') {
              iconName = 'explore'
            } else if (route.name === 'subscribe') {
              iconName = 'subscriptions'
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={30} color={color} />
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
        }}
        >
          
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="explore" component={Explore} />
          <Tab.Screen name="subscribe" component={Subscribe} />
          
        </Tab.Navigator>
      )
    }

    return (
      <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="rootHome" component={RootHome} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="videoPlayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    );
  }



export default App
