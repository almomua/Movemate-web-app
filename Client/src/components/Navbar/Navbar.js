import React from "react";
import logo from'../imgs/logo.png'
import { Link } from "react-router-dom";
import './navbar.css'


function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg  fixed-top">
        <Link className="navbar-brand" href="#">
            <img src={logo} alt="Logo" className="img-fluid" style={{ maxHeight: '50px' }} />
        </Link>
        <div className="nav-content collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <Link className="nav-link mr-3" href="#" style={{ color: '#fff', fontSize: '25px' }}>Home</Link>
            <Link className="nav-link mr-3" href="#" style={{ color: '#fff', fontSize: '25px' }}>Diet Plan</Link>
            <Link className="nav-link mr-3" href="#" style={{ color: '#fff', fontSize: '25px' }}>Workout Plan</Link>
            <Link className="nav-link mr-3" href="#" style={{ color: '#fff', fontSize: '25px' }}>Food</Link>
            <Link className="nav-link mr-3" href="#" style={{ color: '#fff', fontSize: '25px' }}>Body</Link>
        </div>
        </nav>


        </>
    );
}

export default Navbar;