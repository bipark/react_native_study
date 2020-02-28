import React, {Component} from 'react';
import { Button } from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './Home';
import DetailScreen from '../Detail';

const HomeStack = createStackNavigator();

export default class Home extends Component {

	render() {
		return (
			<HomeStack.Navigator>
				<HomeStack.Screen name="Home"
				                  component={HomeScreen}
				                  options={{
				                  	title:"Navigator",
					                  headerStyle: {
				                  		backgroundColor:'#f4511e',
					                  },
					                  headerTintColor: '#fff',
					                  headerTitleStyle: {
						                  fontWeight: 'bold',
					                  },
					                  headerRight: () => (
						                  <Button
							                  onPress={() => alert('This is a button!')}
							                  title="Info"
							                  color="#fff"
						                  />
					                  ),
				                  }}
				/>
				<HomeStack.Screen name="Detail" component={DetailScreen}/>
			</HomeStack.Navigator>
		)
	}
}

