import React, { useCallback, useEffect, useState } from 'react';
import { useQueryClient, useMutation } from 'react-query';
import updateItemsRequest from '../api/updateItemsRequest';
import deleteItemRequest from '../api/deleteItemRequest';
import { debounce } from 'lodash';
//useMutation hook is going to return an array of two items, it is used for updating items


export const Item = ({ item }) => {
    const [text, setText] = useState(item.text);

    const queryClient = useQueryClient(); //this is a hook that we can use to invalidate the cache
    // and refetch the data from the server

    const { mutate: updateItem } = useMutation((updatedItem) =>
        updateItemsRequest(updatedItem),
        {
            onSettled: () => {
                queryClient.invalidateQueries('items'); //this is how we invalidate the cache
                // and refetch the data from the server
            },
        }
    );

    const debouncedUpdateItem = useCallback(
        debounce(updateItem, 600),
        [updateItem]);

    // const toggleCompletion = () => {
    //     console.log('toggleCompletion');
    // }

    // }
    const { mutate: deleteItem } = useMutation((updatedItem) =>
        deleteItemRequest(updatedItem),
        {
            onSettled: () => {
                queryClient.invalidateQueries('items'); //this is how we invalidate the cache
                // and refetch the data from the server
            },
        }
    );

    useEffect(() => {
        if (text !== item.text) debouncedUpdateItem({ ...item, text: text });
    }, [text, item, debouncedUpdateItem]);

    return (
        <div>
            <input checked={item.isCompleted} type="checkbox" onChange={() => updateItem({ ...item, isCompleted: !item.isCompleted })}
            />
            <input type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => deleteItem(item)}>Delete</button>
        </div>
    );
};