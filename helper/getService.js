/** @format */

// const api_url = 'https://chanmax-opening.herokuapp.com/api';
const api_url = '/';

export const getService = (api) => {
	return fetch(api_url + api, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
