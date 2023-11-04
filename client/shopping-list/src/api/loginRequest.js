import { API_URL } from './config';

export default (password) => {
    return fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify( // we need to stringify the JS object into JSON to
            //send it to the server as a JSON string because the server only understands JSON
            {
                password: password
            }
        )


    })
        .then(res => {
            if (res.status === 200) {
                return res.json()
            }
            else {
                throw new Error("Error logging in");
            }
        })
}
