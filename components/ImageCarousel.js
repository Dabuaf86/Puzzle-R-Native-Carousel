import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { Storage } from 'expo-storage';
import { URL, randomImage } from './Constants';
import { style } from './Styles';

const ImageCarousel = () => {
	const [block, setBlock] = useState(0);
	const [data, setData] = useState(false);
	const [uri, setUri] = useState('');
	const [loading, setLoading] = useState(true);

	const handleLoad = async () => {
		const storedURL = JSON.parse(await Storage.getItem({ key: 'URL' }));
		const storedBlock = JSON.parse(await Storage.getItem({ key: 'BLOCK' }));
		if (storedURL && storedBlock) {
			setBlock(storedBlock);
			setUri(storedURL);
		}
		fetch(URL)
			.then(res => res.json())
			.then(json => setData(json))
			.catch(error => console.log(error));
	};

	const handlePrev = async () => {
		const prev = block - 1;
		setBlock(prev);
		await Storage.setItem({ key: 'BLOCK', value: JSON.stringify(prev) });
		let currImage = randomImage(data, prev);
		setUri(currImage);
		await Storage.setItem({ key: 'URL', value: JSON.stringify(currImage) });
	};

	const handleNext = async () => {
		const next = block + 1;
		setBlock(next);
		await Storage.setItem({
			key: 'BLOCK',
			value: JSON.stringify(next),
		});
		let currImage = randomImage(data, next);
		setUri(currImage);
		await Storage.setItem({
			key: 'URL',
			value: JSON.stringify(currImage),
		});
	};

	useEffect(() => {
		if (data) {
			if (uri === '') {
				Storage.setItem({
					key: 'BLOCK',
					value: JSON.stringify(block),
				});
				let currImage = randomImage(data, block);
				setUri(currImage);
				setLoading(false);
				Storage.setItem({ key: 'URL', value: JSON.stringify(currImage) });
			} else {
				setUri(uri);
				setBlock(block);
				setLoading(false);
			}
		}
	}, [data]);

	return loading ? (
		<View style={style.container}>
			<TouchableOpacity style={style.load} onPress={handleLoad}>
				<Text style={style.btnText}>Load Images 🌎</Text>
			</TouchableOpacity>
		</View>
	) : (
		<View style={style.container}>
			<Text style={style.title}>IMAGE CAROUSEL COMPONENT</Text>
			{data.length ? (
				<Text style={style.imgTitle}>{data[block].title}</Text>
			) : null}
			<View style={style.imgContainer}>
				<Image source={{ uri }} style={style.img} />
			</View>
			<View style={style.btnContainer}>
				{block > 0 ? (
					<TouchableOpacity style={style.btn} onPress={handlePrev}>
						<Text style={style.btnText}>◀</Text>
					</TouchableOpacity>
				) : null}
				{block < data.length - 1 ? (
					<TouchableOpacity style={style.btn} onPress={handleNext}>
						<Text style={style.btnText}>▶</Text>
					</TouchableOpacity>
				) : null}
			</View>
			<FlatList></FlatList>
		</View>
	);
};

export default ImageCarousel;
