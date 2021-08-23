import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Swipe from './components/ImageCarousel';

const images = [
	'https://images.pexels.com/photos/9215861/pexels-photo-9215861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
	'https://images.pexels.com/photos/592077/pexels-photo-592077.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
	'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
	'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
	'https://images.pexels.com/photos/4321085/pexels-photo-4321085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
];

export default class App extends Component {
	render() {
		return (
			<View>
				<Text>Check your next destination</Text>
				<Swipe images={images} />
			</View>
		);
	}
}
const style = StyleSheet.create({
	container: { marginTop: 50 },
});
