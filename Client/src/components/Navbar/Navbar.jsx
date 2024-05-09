import React from "react"
import { Link } from "react-router-dom"

export default function Navbar () {
    return <>
    <nav className="navbar navbar-expand-lg">
  <div className="container">
  <Link className="navbar-brand " to={"/guest"}>
    <img src="movemate-high-resolution-logo-transparent (3).png" alt="logo"/>
  </Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link fw-bold text-white me-3 active" aria-current="page" to={"/guest"}>HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold text-white me-3" to={"/body"}>BODY</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold text-white me-3" to={"/food"}>FOOD</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold text-white me-3" to={"/profile"}>PROFILE</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold text-white me-3" to={"/workout"}>Workout</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold text-white me-3" to={"/diet"}>Diet</Link>
        </li>
      </ul> 
    </div> 
  </div>
</nav>
    </>
}