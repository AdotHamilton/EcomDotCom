import React from 'react';
import { removeFromCart } from "../redux/actions/shopping-actions";
import { useDispatch } from 'react-redux';
const RemoveItem = props => {
    const { product } = props;
    const dispatch = useDispatch();
    const onClickHandler = () => {
        dispatch(removeFromCart(product.product));
    }
    return (
        <>
            <button className="btn btn-danger" onClick={onClickHandler} >Remove</button>
        </>
    )
};

export default RemoveItem;