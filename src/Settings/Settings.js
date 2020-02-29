import React, {Component} from 'react';
import { observer } from 'mobx-react';

import {Button, StyleSheet, Text, View} from 'react-native';

import CounterStore from '../../mobx/store'

@observer
export default class Profile extends Component {

	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text style={{fontSize: 60}}>
					{CounterStore.counter}
				</Text>
				<Button
					title="Increase"
					onPress={() => CounterStore.increment()}
				/>
				<Button
					onPress={() => this.props.navigation.navigate('Detail', {
						title:"From Settings"
					})}
					title="Open Modal"
				/>
			</View>
		)
	}
}

