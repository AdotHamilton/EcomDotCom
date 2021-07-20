import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/shopping-actions";
import RemoveItem from "./RemoveItem";
import { Link } from "@reach/router";
const CartItem = props => {
    const {product} = props;
    
    const dispatch = useDispatch();
    const qtyChangeHandler = (qty) => {
        dispatch(addToCart(product.product, parseInt(qty)));
    }

    return (
        <div className="cartItem">
            
            <img src={product.imageURL} />
            <Link to={"/products/" + product.name} style={{ color: 'white', textDecoration: 'inherit'}}><h3>{product.name}</h3></Link>
            <span className="item__actions">
                <input type="number" value={product.qty} onChange={(e) => qtyChangeHandler(e.target.value)} />
                <RemoveItem product={product} />
            </span>
        </div>
    )
}
export default CartItem;