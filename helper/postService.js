/** @format */

// const api_url = "https://chanmax-opening.herokuapp.com/api";
const api_url = '/';

export const postService = (api, data) => {
	return fetch(api_url + api, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
