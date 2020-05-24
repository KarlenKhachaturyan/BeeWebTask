import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/home.css'

const defaultHeader = () =>{
    return (<div>
        <nav className="navbar navbar-expand-sm bg-dark">

        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/signup">Signup</Link>
            </li>
          
        </ul>
        </nav>

        </div>
        )
}
export default defaultHeader