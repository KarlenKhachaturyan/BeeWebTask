import React from 'react'
import {Link} from 'react-router-dom'


const authHeader = () =>{
    return (

        <nav className="navbar navbar-expand-sm bg-dark">

            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/workspaces">Workspaces</Link>
                </li>
                
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/createWorkspace">Create Workspace</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/logout">Logout</Link>
                </li>
            </ul>
        </nav>
    )
}
export default authHeader