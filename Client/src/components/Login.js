import React, { useState } from 'react';
import './login.css'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import  validation from'./LoginValidation';



function Login(){

    const [values, setvalues]=useState({
        email:'',
        password:'',
    })
    const[errors,setErrors]=useState({})

    const handleInput=(event)=>{
        setvalues(prev =>({...prev,[event.target.name]:[event.target.value]}))

    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(validation(values));
    }

    return(
        <>
        <div class="login-background container">
            <div class="login-balls-1"></div>
            <div class="login-balls-2"></div>
            <div class="login-balls-3"></div>
            <div class=" container-sml form-container login-cont">
                <form action="" onSubmit={handleSubmit}>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="email" placeholder="Enter Your email"
                            onChange={handleInput} name='email'/>
                            <label for="email" class="form-label">Email address</label>
                            {errors.email && (<p className="text-danger">{errors.email}</p>)}
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" name="password" id="password" class="form-control form-control-lg" placeholder="Enter Your password"
                            onChange={handleInput} />
                            <label for="password" class="form-label ">Password</label>
                            {errors.password && (<p className="text-danger">{errors.password}</p>)}
                        </div>
                        <div class="d-grid gap-2 mb-3">
                            <button class="btn btn-lg login-button" type="submit" value="submit" id="btnn">Log in</button>
                        </div>
                        <div >
                            <p class='mb-3'> Not A Member?</p>
                            <Link to="/signup" type="button" class="btn btn-link btn-sm btn-outline-light signup-link">Sign Up Now <FaArrowRight /></Link>
                        </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default Login;