import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class Profile extends Component {

	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text style={{fontSize: 60}}>
					Profile
				</Text>
				<Button
					title="Go Back"
					onPress={() => this.props.navigation.goBack()}
				/>
			</View>
		)
	}
}

