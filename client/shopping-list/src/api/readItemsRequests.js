import { API_URL } from './config';

export default (token) => {
    return fetch(`${API_URL}/shoppinglist`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
}

