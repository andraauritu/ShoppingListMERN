import { API_URL, token } from './config';
const fetchFunction = () => {
    return fetch(`${API_URL}/shoppinglist`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
}
export default fetchFunction;

