import React from "react";
import { useQuery } from 'react-query'
import ClipLoader from 'react-spinners/ClipLoader';


import readItemsRequests from '../api/readItemsRequests';
import { Item } from '../components/Item';
import { CreateItemForm } from '../components/CreateItemForm';



export const ItemPage = () => {
    const { isLoading, data: items } = useQuery('items', readItemsRequests);

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