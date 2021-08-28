import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Button } from 'react-native';
import server from '../server/server';
// import { Storage } from 'expo-storage';

// Storage.setItem({ key: 'block', value: JSON.stringify(block) });

// const lastImage = async () => {
// 	const lastData = JSON.parse(await Storage.getItem({ key: 'block' }));
// };

const ImageCarousel = () => {
	const [block, setBlock] = useState(0);
	const [lastURL, setLastURL] = useState('');
	const [data, setData] = useState(false);
	const [loading, setLoading] = useState(true);

	const randomImage = (arr, page) => {
		return arr[page].images[
			Math.floor(Math.random() * arr[page].images.length)
		];
	};

	const handlePrev = () => {
		setBlock(block - 1);
	};
	const handleNext = () => {
		setBlock(block + 1);
	};

	return (
		<View style={style.container}>
			<Text style={style.title}>Check your next destination at Puzzle</Text>
			<Text style={style.imgTitle}>{server[block].title}</Text>
			<View style={style.imgContainer}>
				<Image source={randomImage(server, block)} style={style.imagen} />
			</View>
			<View style={style.btnContainer}>
				{block > 0 ? (
					<Button onPress={handlePrev} style={style.btn} title='Prev' />
				) : null}
				{block < server.length - 1 ? (
					<Button onPress={handleNext} style={style.btn} title='Next' />
				) : null}
			</View>
		</View>
	);
};
const style = StyleSheet.create({
	container: {
		width: '100%',
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 40,
		backgroundColor: '#000000',
	},
	title: {
		flex: 1,
		position: 'absolute',
		alignSelf: 'center',
		fontWeight: 'bold',
		textDecorationLine: 'underline',
		color: '#f0f8ff',
	},
	btnContainer: {
		flex: 1,
		flexDirection: 'row',
		position: 'relative',
		alignContent: 'center',
		justifyContent: 'space-evenly',
		marginTop: 160,
	},
	btn: {
		flex: 1,
		color: '#696969',
		backgroundColor: '#f5f5dc',
		borderRadius: 5,
	},
	imgContainer: {
		flex: 7,
		width: '100%',
		height: '100%',
	},
	imagen: { width: '100%', height: '100%', resizeMode: 'contain' },
	imgTitle: {
		flex: 1,
		position: 'relative',
		alignSelf: 'center',
		fontWeight: 'bold',
		color: 'yellow',
	},
	// paginate: {
	// 	display: 'flex',
	// 	flexDirection: 'row',
	// 	position: 'absolute',
	// 	bottom: 0,
	// 	alignSelf: 'center',
	// },
	// pageText: { color: '#F3F1F5', margin: 3 },
	// pageActiveText: { color: '#BFA2DB', margin: 3 },
});

export default ImageCarousel;
