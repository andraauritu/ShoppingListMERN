import { API_URL, token } from './config';
// const Buffer = require('safe-buffer').Buffer;
// import { Buffer } from 'safe-buffer';
export default function createItemRequest(item) {
    return fetch(`${API_URL}/shoppinglist`, {
        //method, headers, and body are properties of the fetch function
        //method is the HTTP method that we want to use, which is PUT
        //headers is an object that contains the Authorization and Content-Type keys
        //body is the data that we want to send to the server, which is the item object
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify( // we need to stringify the JS object into JSON to
            //send it to the server as a JSON string because the server only understands JSON
            {
                text: item.text,
                isCompleted: false
            }
        )
    })
        .then(res => res.json())
}
