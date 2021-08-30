import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
	load: {
		flex: 1,
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		borderRadius: 10,
		borderColor: '#f5f5dc',
		borderWidth: 3,
	},
	btnText: {
		fontSize: 24,
		color: '#f5f5dc',
		backgroundColor: 'transparent',
		fontWeight: 'bold',
	},
	container: {
		width: '100%',
		marginTop: 25,
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'black',
	},
	title: {
		flex: 1,
		alignItems: 'center',
		position: 'relative',
		fontSize: 24,
		fontWeight: 'bold',
		textDecorationLine: 'underline',
		color: '#f5f5dc',
	},
	imgContainer: {
		flex: 10,
		width: '100%',
		height: '100%',
	},
	img: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
	imgTitle: {
		position: 'relative',
		alignSelf: 'center',
		fontWeight: 'bold',
		color: '#f5f5dc',
		fontSize: 20,
	},
	btnContainer: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		width: '100%',
	},
	btn: {
		color: '#f5f5dc',
		backgroundColor: 'transparent',
		padding: 10,
		borderRadius: 10,
		borderColor: '#f5f5dc',
		borderWidth: 3,
	},
});
