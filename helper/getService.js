const api_url = "http://localhost:8000/api";

export const getService = (api) => {
    return fetch(api_url + api, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};
