import { useState, useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import createItemRequest from "../api/createItemRequest";
import { TokenContext } from "../App";

export const CreateItemForm = () => {
    const [text, setText] = useState('');
    const { token } = useContext(TokenContext);

    const queryClient = useQueryClient();

    const { mutate: createItem } = useMutation(
        (newItem) => createItemRequest(newItem, token),
        {
            onSettled: () => {
                queryClient.invalidateQueries('items'); //this is how we invalidate the cache
                // and refetch the data from the server
            },
        }
    );

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (!text) return; //this is how we prevent the form from submitting if the input field is empty
                createItem({ text: text })
                setText(''); //this is how we clear the input field after we submit the form
            }}>
            <input
                onChange={(e) => setText(e.target.value)}
                type="text"
                value={text}
            />
            <button >Create</button>
        </form>
    )
}
