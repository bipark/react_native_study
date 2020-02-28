import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from './src/Home';
import Profile from './src/Profile';
import Settings from './src/Settings';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Profile" component={Profile}/>
        <Tab.Screen name="Settings" component={Settings}/>
      </Tab.Navigator>

      {/*<Stack.Navigator>*/}
      {/*  <Stack.Screen name="Home" component={Home}/>*/}
      {/*  <Stack.Screen name="Profile" component={Profile}/>*/}
      {/*</Stack.Navigator>*/}
    </NavigationContainer>
  );
}

