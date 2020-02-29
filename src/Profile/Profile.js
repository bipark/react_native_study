import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, FlatList} from 'react-native';
import axios from "axios";

function Item({item}) {
	return (
		<View style={styles.item}>
			<Text style={styles.title}>{item.name}</Text>
		</View>
	)
}

export default class Profile extends Component {

	state = {
		persons: []
	};

	componentDidMount() {
		axios.get("https://jsonplaceholder.typicode.com/users")
			.then(res =>{
				this.setState({ persons:res.data });
			});
	}

	render() {

		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				{/*<Text style={{fontSize: 60}}>*/}
				{/*	Profile*/}
				{/*</Text>*/}
				{/*<Button*/}
				{/*	title="Go to Details"*/}
				{/*	onPress={() => this.props.navigation.navigate('Detail', {*/}
				{/*		title:"From Profile"*/}
				{/*	})}*/}
				{/*/>*/}

				<FlatList
					data={this.state.persons}
					renderItem={({item})=><Item item={item}/>}
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

