import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/shopping-actions";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = props => {
    const { name } = props.product;
    const formatted_name = name.replace(" ","_");

    const dispatch = useDispatch();
    const onSubmitHandler = () => {
        dispatch(addToCart(props.product._id, 1));
        document.getElementById("add"+ props.product._id).innerHTML = "Added";
    }
    
    return (
        <div id="productTile" className="">
            <h4>{props.product.name}</h4>
            <img src={props.product.imageUrl} alt={props.product.name}></img>
            <h4>${props.product.price}</h4>
            <div id="productActions"><span className="d-flex justify-content-around">
                <button id={"add"+ props.product._id}onClick={onSubmitHandler} className="btn btn-primary">Add <FontAwesomeIcon icon={faShoppingCart} /></button>
                <Link to={"/products/" + formatted_name} >Details</Link> 
            </span></div>
        </div>
    )
};
export default Product;