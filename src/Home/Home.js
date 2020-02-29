import React, {Component} from 'react';
import { observer } from 'mobx-react';
import { StyleSheet, Text, View, Button } from 'react-native';

import CounterStore from '../../mobx/store'

@observer
export default class HomeScreen extends Component {

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
					title="Go to Details"
					onPress={() => this.props.navigation.navigate('Detail', {
						title: "This is Param"
					})}
				/>
			</View>
		)
	}
}

