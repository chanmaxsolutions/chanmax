export const postService = (api, data) => {
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
