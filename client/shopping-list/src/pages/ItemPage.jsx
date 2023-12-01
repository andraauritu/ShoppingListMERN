import { useContext } from "react";
import { useQuery } from 'react-query'
import ClipLoader from 'react-spinners/ClipLoader';

import readItemsRequests from '../api/readItemsRequests';
import { Item } from '../components/Item';
import { CreateItemForm } from '../components/CreateItemForm';
import { TokenContext } from '../App';


export const ItemPage = () => {
    const { token } = useContext(TokenContext);
    const { isLoading, data: items } = useQuery(
        'items', () =>
        readItemsRequests(token)
    );

    return (
        <div>
            <h1>Shopping List</h1>
            {
                isLoading ? (
                    <ClipLoader color='#f86c6b' size={50} loading={isLoading} />
                ) : (
                    items.map((item) => (
                        <Item item={item} key={item._id} />
                    ))
                )
            }
            <CreateItemForm />
        </div>

    )
};