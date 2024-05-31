import React, { useEffect, useState } from 'react';
import './login.css'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import  validation from'./LoginValidation';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Login(){

    const [values, setvalues]=useState({
        email:'',
        password:'',
    })
    const[errors,setErrors]=useState({})
    const [loggedIn, setLoggedIn] = useState(false);
    const [serverError, setServerError] = useState('');
    // const[api,setApi]=useState('http://localhost:8000/auth/login');


    const handleInput=(event)=>{
        setvalues(prev =>({...prev,[event.target.name]:event.target.value}))
        console.log("Values",values)

    }

    // const handleSubmit= async (event)=>{
    //     event.preventDefault();
    //     setErrors(validation(values));

    //     // const response= await axios.post('http://localhost:8000/auth/login',{
    //     //     email: values.email,
    //     //     password: values.password
    //     // }).then(response => console.log(response.data))
    //     // .catch(error => console.log(error))

    //     try {

    //         const response = await axios.post('http://localhost:8000/auth/login',{
    //             email: values.email,
    //             password: values.password
    //         });
            
    //         console.log("Values",values)

    //         console.log("Response:", response.data);
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    // };

    async function handleSubmit  (e)  {
        e.preventDefault(); 
        setErrors(validation(values));
        // if(values.email=== 'shekoharby3@gmail.com'){
        //     setApi('http://localhost:8000/admin/login');
        //     setLoggedIn(true);
        //     toast.success("Login as an admin successfully!");
        // }
        try{
            let apiUrl = 'http://localhost:8000/auth/login'; 
        
            if (values.email === 'shekoharby3@gmail.com') {
                apiUrl = 'http://localhost:8000/admin/login';
                toast.success("Login as an admin successfully!");
            }
            const res = await axios.post(apiUrl , values);
            console.log(res);
            console.log(res.data.message);
            setLoggedIn(true);
            if(res.status===200 &&values.email!=='shekoharby3@gmail.com'){
                toast.success("Login successful!");
            }

    
        }catch(err){
            toast.error("An error occurred while logging in. Please try again.");

        if (err.response.status === 401) {
            setServerError('Email or password is incorrect')
            // setServerError(err.response.data.message);
            // console.log(err.response.data.message);
        } else {
            // setServerError('Internal server error');
            setServerError(err.response.data.message);
            console.log(err.response.data.message);

        }
        }
        // setErrors(validation(values));
        // if (!loggedIn) {
        //     setErrors(validation(values));
        // }
    
    };

    if (loggedIn) {
        return <Navigate to="/guest" />;
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
                            {serverError && <p className="text-danger">{serverError}</p>}
                        </div>
                        <div  className='text-center'>
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