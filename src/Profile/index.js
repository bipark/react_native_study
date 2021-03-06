import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from './Profile';
import DetailScreen from '../Detail';

const HomeStack = createStackNavigator();

export default class Home extends Component {

	render() {
		return (
			<HomeStack.Navigator>
				<HomeStack.Screen name="Profile" component={ProfileScreen}/>
				<HomeStack.Screen name="Detail" component={DetailScreen}/>
			</HomeStack.Navigator>
		)
	}
}

