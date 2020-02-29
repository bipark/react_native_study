import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, FlatList, TouchableHighlight} from 'react-native';
import axios from "axios";

function Item({item, navigation}) {
	_onPress = () => {
		navigation.navigate('Detail', {
			title: "This is Param",
			item:item,
		})
	};

	return (
		<TouchableHighlight onPress={this._onPress}>
			<View style={styles.item}>
				<Text style={styles.title}>{item.name}</Text>
			</View>
		</TouchableHighlight>
	)
}

export default class Profile extends Component {

	constructor(props) {
		super(props);
		this.state = {
			persons: []
		};
	}

	componentDidMount() {
		axios.get("https://jsonplaceholder.typicode.com/users")
			.then(res =>{
				this.setState({ persons:res.data });
			});
	}

	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<FlatList
					data={this.state.persons}
					renderItem={({item})=><Item item={item} navigation={this.props.navigation}/>}
					keyExtractor={item=>item.id}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
	},
});

