import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class Detail extends Component {

	render() {
		const {title} = this.props.route.params;
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text style={{fontSize: 60}}>
					{title}
				</Text>
			</View>
		)
	}
}

