import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from "@mui/material";
import { deleteItem, removeItem } from "../util/cartSlice";

export const Cart = () => {
    const data = useSelector(state => state.cart)
    const dispatch = useDispatch();

    const clearAll = () => {
        dispatch(removeItem())
    }

    const removedItem = (id) => {
        dispatch(deleteItem({ id: id }))
    }

    return (
        <div className='m-auto'>
            <div className='flex justify-between bg-gray-200 text-center p-2 max-w-xl mb-4 rounded-lg'>
                <div className='font-bold my-auto'>Cart</div>
                <Button variant='outlined' className='' onClick={clearAll}>Clear All</Button>
            </div>
            <div className='flex flex-col m-auto max-w-xl'>
                {data?.items?.map(e => {
                    return (
                        <div className='p-4 m-1 border-b-2 border-green-200'>
                            <h2 className='font-bold'>{e.name}</h2>
                            <h4>Rs. {e.price}</h4>
                            <h4>{e.description}</h4>
                            <Button variant="contained" style={{ marginTop: "1rem" }} onClick={() => removedItem(e.id)}>Remove</Button>
                        </div>)
                })}
            </div>
        </div>
    )
}
