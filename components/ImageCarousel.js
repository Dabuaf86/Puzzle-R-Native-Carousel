import React, { Component } from 'react';
import {
	View,
	Image,
	ScrollView,
	Dimensions,
	Text,
	StyleSheet,
} from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.6;

export default class Swipe extends Component {
	state = {
		active: 0,
	};

	change = ({ nativeEvent }) => {
		const swipe = Math.ceil(
			nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
		);
		if (swipe !== this.state.active) this.setState({ active: swipe });
	};

	render() {
		return (
			<View style={style.container}>
				<ScrollView
					pagingEnabled
					horizontal
					onScroll={this.change}
					showsHorizontalScrollIndicator={true}
					style={style.container}
				>
					{this.props.images.map((elem, index) => (
						<Image key={index} source={{ uri: elem }} style={style.images} />
					))}
				</ScrollView>
				<View style={style.paginate}>
					{this.props.images.map((elem, index) => (
						<Text
							key={index}
							style={
								index === this.state.active
									? style.pageActiveText
									: style.pageText
							}
						>
							⚪
						</Text>
					))}
				</View>
			</View>
		);
	}
}

const style = StyleSheet.create({
	container: { width, height },
	images: { width, height, resizeMode: 'cover' },
	paginate: {
		display: 'flex',
		flexDirection: 'row',
		position: 'absolute',
		bottom: 0,
		alignSelf: 'center',
	},
	pageText: { color: '#888', margin: 3, fontSize: width / 30 },
	pageActiveText: { color: '#fff', margin: 3, fontSize: width / 30 },
});
