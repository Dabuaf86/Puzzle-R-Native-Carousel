export const URL = 'https://testapi.io/api/dabuaf86/images';

export const randomImage = (arr, page) => {
	return arr[page].images[Math.floor(Math.random() * arr[page].images.length)];
};
