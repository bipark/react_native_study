import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './Home';
import DetailScreen from '../Detail';

const HomeStack = createStackNavigator();

export default class Home extends Component {

	render() {
		return (
			<HomeStack.Navigator>
				<HomeStack.Screen name="Home" component={HomeScreen}/>
				<HomeStack.Screen name="Detail" component={DetailScreen}/>
			</HomeStack.Navigator>
		)
	}
}

