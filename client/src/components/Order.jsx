import React from 'react'
import { Link } from "@reach/router";
export const Order = (props) => {
    const { product } = props;


    return (
        <div className="order">
            <img src={product.imageUrl} alt={product.name} />
            <Link className="productLink" style={{ textDecoration: "none", color: "white", "&:hover": { color: "rgb(192,192,192)" } }}to={"/products/" + product.name}>
                <h3>{product.name}</h3>
            </Link>
        </div>        
        
        
    )
}
