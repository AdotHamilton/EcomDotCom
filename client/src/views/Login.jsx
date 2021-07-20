import React,{useState} from 'react';
import Axios from 'axios';
import Input from '../components/Input';
import {Link,navigate} from  '@reach/router';


const Login = props => {
    const initialState = {
        email:"",
        password:""
    };
    const [log,setLog] = useState(initialState);
    const [errors,setErrors] = useState(initialState);

    const handleInputChange = (e) => {
        setLog({
            ...log,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:8000/api/login",log,{withCredentials:true})
            .then(res => {
                    localStorage.setItem("user", res.data.id)
                    navigate('/Dashboard/');

            })
            .catch(err => {
                if(err.response.status === 400){
                    let err = {
                        password :{
                            message:"Invalid Credentials"
                        },
                        email :{
                            message:"Invalid Credentials"
                        }
                    }
                    setErrors(err);
                }
            })
    }


    return (
        <form onSubmit={handleSubmit} className="col-5 my-5 mx-auto bg-dark text-light p-4 rounded">
            <h2>Login</h2>
            <Input 
                type="email"
                name="email"
                label="Email:"
                value={log.email}
                placeholder="Ex: john@doe.com"
                handleChange={handleInputChange}
                error={errors.email}
            />
            <Input 
                type="password"
                name="password"
                label="Password:"
                value={log.password}
                handleChange={handleInputChange}
                error={errors.password}
            />
            <Input 
                type="submit"
                value="Login"
            />
            <br></br>

            <Link to="/">Don't have an account?</Link>

        </form>
    );


}

export default Login;