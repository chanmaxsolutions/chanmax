/** @format */

const api_url = 'https://chanmax-opening.herokuapp.com/api';

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

export const postFormService = (api, data) => {
    return fetch(api, {
        method: "POST",
        headers: {
            Accept: "application/json",
        },
        body: data,
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};
