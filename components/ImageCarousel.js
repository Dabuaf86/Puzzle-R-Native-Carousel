import React, { useState } from 'react';
import {
	View,
	Image,
	Dimensions,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import server from '../server/server';

const { width } = Dimensions.get('window');
const height = width * 0.8;

// const Swipe = () => {
// 	const [active, setActive] = useState(0);

// 	// const handleScroll = ({ nativeEvent }) => {
// 	// 	const swipe = Math.ceil(
// 	// 		nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
// 	// 	);
// 	// 	if (swipe !== active) setActive({ active: swipe });
// 	// };

// 	const handlePrev = e => console.log('Previous Block');
// 	const handleNext = e => console.log('Next Block');

// 	return (
// 		<View style={style.container}>
// 			<Text style={style.title}>Check your next destination at Puzzle</Text>
// 			{/* <ScrollView
// 				pagingEnabled
// 				horizontal
// 				onScroll={handleScroll()}
// 				showsHorizontalScrollIndicator={true}
// 				style={style.container}
// 			>
// 				{images.map((elem, index) => (
// 					<Image
// 						key={index}
// 						source={{ uri: elem.images }}
// 						style={style.images}
// 					/>
// 				))}
// 			</ScrollView>
// 			<View style={style.paginate}>
// 				{images.map((_, index) => (
// 					<Text
// 						key={index}
// 						style={index === active ? style.pageActiveText : style.pageText}
// 					>
// 						⚪
// 					</Text>
// 				))}
// 			</View> */}
// 			<View style={style.btnContainer}>
// 				<TouchableOpacity onPress={handlePrev} style={style.btn}>
// 					<Text>Prev</Text>
// 				</TouchableOpacity>
// 				<TouchableOpacity onPress={handleNext} style={style.btn}>
// 					<Text>Next</Text>
// 				</TouchableOpacity>
// 			</View>
// 		</View>
// 	);
// };

const Swipe = () => {
	const randomImage = server[Math.floor(Math.random() * server.length)];
	console.log('THIS IS THE IMAGE', randomImage);

	const [active, setActive] = useState(0);

	const handlePrev = e => console.log('Previous Block');
	const handleNext = e => console.log('Next Block');

	return (
		<View style={style.container}>
			<Text style={style.title}>Check your next destination at Puzzle</Text>
			<Image source={randomImage} style={style.images} />
			<View style={style.btnContainer}>
				<TouchableOpacity onPress={handlePrev} style={style.btn}>
					<Text>Prev</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={handleNext} style={style.btn}>
					<Text>Next</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
const style = StyleSheet.create({
	container: { width, height, marginTop: 40, backgroundColor: '#000000' },
	title: {
		display: 'flex',
		flexDirection: 'row',
		position: 'absolute',
		alignSelf: 'center',
		fontWeight: 'bold',
		textDecorationLine: 'underline',
		color: '#f0f8ff',
	},
	btnContainer: {
		display: 'flex',
		flexDirection: 'row',
		position: 'relative',
		alignContent: 'center',
		justifyContent: 'space-evenly',
		marginTop: 160,
	},
	btn: {
		color: '#696969',
		backgroundColor: '#f5f5dc',
		borderRadius: 5,
	},
	images: { width: '50%', height: '35%', resizeMode: 'contain' },
	paginate: {
		display: 'flex',
		flexDirection: 'row',
		position: 'absolute',
		bottom: 0,
		alignSelf: 'center',
	},
	pageText: { color: '#F3F1F5', margin: 3, fontSize: width / 30 },
	pageActiveText: { color: '#BFA2DB', margin: 3, fontSize: width / 30 },
});

export default Swipe;
