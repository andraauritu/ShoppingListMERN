import { API_URL } from './config';
export default (item, token) => {
    return fetch(`${API_URL}/shoppinglist/${item._id}`, {
        //method, headers, and body are properties of the fetch function
        //method is the HTTP method that we want to use, which is PUT
        //headers is an object that contains the Authorization and Content-Type keys
        //body is the data that we want to send to the server, which is the item object
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify( // we need to stringify the JS object into JSON to 
            //send it to the server as a JSON string because the server only understands JSON
            {
                text: item.text,
                isCompleted: item.isCompleted
            }
        )
    })
        .then(res => res.json())
}

