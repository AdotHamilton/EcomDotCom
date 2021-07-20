import React from "react";
import { Navbar, Nav } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPassport, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { navigate } from "@reach/router";
const NavBar = props => {
    const logoutHandler = () => {
        if(window.confirm("You are about to log out, are you sure?") === true) {
            axios.get("http://localhost:8000/api/logout", {withCredentials: true})
            localStorage.removeItem("user");
            navigate("/")
        } else {
            return;
        }

    }
    return (
        <>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/Dashboard">Store</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/cart">My Cart<FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <Nav.Link onClick={logoutHandler} >Logout</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
};
export default NavBar;