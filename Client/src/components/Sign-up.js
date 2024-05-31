import React, { useState } from 'react';
import './Sign-up.css';
import { Link } from 'react-router-dom';
import validation from './SignupValidation';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';



function Signup(){

    const [values, setvalues]=useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const[errors,setErrors]=useState({})
    const [serverError, setServerError] = useState('');
    const [createUser, setCreateUser] = useState(false);


    const handleInput=(event)=>{
        setvalues(prev =>({...prev,[event.target.name]:event.target.value}))

    }

    async function handleSubmit  (e)  {
        e.preventDefault();
        setErrors(validation(values));
        try{
            const res = await axios.post('http://localhost:8000/auth/register' , values);
            console.log(res.data.message);
            console.log(res);
            setCreateUser(true);
            toast.success("Created Account successfully!");
    
        }catch(err){

            if (err.response.status){
                setServerError(err.response.data.message);
                console.log(err.response.data.message);
                console.log(err.response);
            }

            // if (err.response.status === 400) {
            // setServerError(err.response.data.message);
            // console.log(err.response.data.message);
            // } else {
            //     setServerError(err.response.data.message);
            //     console.log(err.response.data.message);
            // // setErrors('internal server error');
            // }
        }
    
    }

    if (createUser) {
        return <Navigate to="/home" />;
    }

    // const handleSubmit= async (event)=>{
    //     event.preventDefault();
    //     setErrors(validation(values));

    //     try {
    //         // Make POST request to your backend API
    //         const response = await axios.post('http://localhost:8000/auth/register', values);

    //         // Handle response (e.g., show success message, redirect user)
    //         console.log("Response:", response.data);
    //     } catch (error) {
    //         // Handle error (e.g., show error message)
    //         console.error("Error:", error.response.data);
    //     }
    // }

    return(
        <>
        <div class="signup-background container">
            <div class="sign-up-balls-1"></div>
            <div class="sign-up-balls-2"></div>
            <div class="sign-up-balls-3"></div>
            <div class=" container-sml form-container sign-up-cont">
                <form action="" onSubmit={handleSubmit}>
                        <div class="form-floating mb-3">
                            <input type="text" name="name" id="name" class="form-control form-control-lg" 
                            onChange={handleInput} placeholder="Enter Your Name"  />
                            <label for="name" class="form-label ">User Name</label>
                            {errors.name && (<p className="text-danger">{errors.name}</p>)}
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="email" name="email"
                            onChange={handleInput} placeholder="Enter Your email"/>
                            <label for="email" class="form-label">Email address</label>
                            {errors.email && (<p className="text-danger">{errors.email}</p>)}
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" name="password" id="password" class="form-control form-control-lg"
                            onChange={handleInput} placeholder="Enter Your password"/>
                            <label for="password" class="form-label ">Password</label>
                            {errors.password && (<p className="text-danger">{errors.password}</p>)}
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" name="confirmPassword" id="confirmPassword" class="form-control form-control-lg"
                            onChange={handleInput} placeholder="Confirm Your password"/>
                            <label for="password" class="form-label ">Confirm Password</label>
                            {errors.confirmPassword && (<p className="text-danger">{errors.confirmPassword}</p>)}
                        </div>
                    
                        <div class="d-grid gap-2 mb-2">
                            <button class="btn btn-lg signup-button" type="submit" value="submit" id="btnn">Register</button>
                            {serverError && <p className="text-danger">{serverError}</p>}
                        </div>
                        <div  className='text-center'>
                            <p class='mb-2'> Already Have An Account?</p>
                            <Link to="/login" type="button" class="btn btn-link btn-sm btn-outline-light login-link">Log in</Link>
                        </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default Signup;