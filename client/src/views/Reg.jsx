import React, {useState} from 'react';
import '../App.css'
import Axios from 'axios';
import Input from '../components/Input';
import {Link, navigate} from '@reach/router'

const Reg = props => {
    const initialState = {
        userName:"",
        email:"",
        password:"",
        confirmPassword:"",

    }
    const [reg, setReg] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    const handleInputChange = (e) => {
        setReg({
            ...reg,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:8000/api/register',reg,{withCredentials:true})
        .then(res => {
            if(res.data){
                setReg(initialState);
                console.log("Navigating");
                localStorage.setItem("user", res.data.id);
                navigate('/Dashboard/');
            }
            else{
                console.log(res)
                setErrors(res.data);
            }
        })
        .catch(err => {
                console.log(err)
        })
}
    return (
        <div className="register">
                
            <form className="col-5 my-5 mx-auto bg-dark text-light p-4 rounded" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <Input 
                type="text"
                name="userName"
                label="Username:"
                value={reg.firstName}
                placeholder="Ex: John523"
                handleChange={handleInputChange}
                error={errors.firstName}
            />
            <Input 
                type="email"
                name="email"
                label="Email:"
                value={reg.email}
                placeholder="Ex: john@doe.com"
                handleChange={handleInputChange}
                error={errors.email}
            />
            <Input 
                type="password"
                name="password"
                label="Password:"
                value={reg.password}
                handleChange={handleInputChange}
                error={errors.password}
            />
            <Input 
                type="password"
                name="confirmPassword"
                label="Confirm Pasword:"
                value={reg.confirmPassword}
                handleChange={handleInputChange}
                error={errors.confirmPassword}
            />
            <Input 
                type="submit"
                disable={false}
                value="Register"
            />
            <br/>
            <br/>
            <Link to="/login">Already Signed Up?</Link>
            </form>            
        </div>
    )
}
export default Reg;


