import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends Component {

	state = {count: 0};

	componentDidMount() {
		setInterval(() => {
			this.setState({count: this.state.count + 1})
		}, 1000)
	}

	render() {
		const {count} = this.state;
		const {color, size} = this.props;

		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text style={{fontSize: 60}}>
					{count}
				</Text>
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

