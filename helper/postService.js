const api_url = "http://localhost:8000/api";

export const postService = (api, data) => {
    return fetch(api_url + api, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};
