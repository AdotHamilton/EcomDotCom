import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import Axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../components/NavBar";
import Product from "../components/Product";
import { getProducts as productList}  from '../redux/actions/product-actions';
const Dashboard = props => {
    const [user, setUser] = useState();
    useEffect(() => {
        Axios.get('http://localhost:8000/api/user/'+ localStorage.getItem("user"))
            .then(res => {
                setUser(res.data.results);
            })
            .catch(err => console.log(err));
            
    }, []);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productList());
    }, [dispatch]);
    
    const getProducts = useSelector((state) => state.getProducts);
    const { products, done_loading, error } = getProducts;
    
    return (
        <>
            <NavBar></NavBar>
            
            <div className="productGrid">
                {
                    done_loading ? products.products.map((product) => {
                        return <Product product={product} key={product._id} />
                    }) : <h2>Loading</h2>
                }
                
            </div>
        </>
    )
}

export default Dashboard;
