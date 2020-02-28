import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SettingScreen from './Settings';
import DetailScreen from '../Detail';

const HomeStack = createStackNavigator();

export default class Home extends Component {

	render() {
		return (
			<HomeStack.Navigator>
				<HomeStack.Screen name="Settings" component={SettingScreen}/>
				<HomeStack.Screen name="Detail" component={DetailScreen}/>
			</HomeStack.Navigator>
		)
	}
}

