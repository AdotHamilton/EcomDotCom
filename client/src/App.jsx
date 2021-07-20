// react essentials
import React, { useEffect, useState } from 'react';
import {Router} from '@reach/router'
// styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// views/components
import Reg from './views/Reg';
import Login from "./views/Login";
import Dashboard from './views/Dashboard';
import ProductPage from "./views/ProductPage";
import Cart from "./views/Cart";
import Profile from "./views/Profile";
// Stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51JAJkpAqLwW1HNPZD87TqmszMxnKKLDoj0nyFQtghGIGJdCbbPiKPOZ9flM0EcjvLiaUDo1tGyIXOP3V3E4Aved50096GYSxvE");


function App() {
  const [ id, setId ] = useState("")
  // setId(location.)
  return (
    <Elements stripe={stripePromise}>
        <Router>
          <Reg path="/" />
          <Login path="/login" />
          <Dashboard path="/Dashboard/"/>
          <ProductPage path="/products/:name" />
          <Cart path="/cart" />
          <Profile path="/profile" />
        </Router>
    </Elements>
  );
}

export default App;
