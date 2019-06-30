import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth';


const Navbar = ({history}) => (
    <>
    <div className="navbar-top">
        <h1 className="page-brand navbar-title">
            Appy-Angelhack
        </h1>
    </div>
    <div className="nav-bar">
        <ul className="nav nav-tabs bg-outline">
            <li className="nav-item">
                <NavLink 
                    to="/signin"
                    className="nav-link"
                    activeClassName='is-active'
                >
                    Login
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                    to="/signup"
                    className="nav-link"
                    activeClassName='is-active'
                >
                    Sign Up
                </NavLink>
            </li>

            {isAuthenticated() && (
                <>
                <div className="nav ml-auto">
                    <li className="nav-item">
                        <NavLink
                            to={`/user/${isAuthenticated().user._id}`}
                            className="nav-link"
                            activeClassName='is-active'
                        >
                            profile
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <span
                            className="nav-link"
                            onClick={() => signout(() => history.push("/"))}
                        >
                            Sign Out
                        </span>
                    </li>
                    </div>
                </>
            )}
        </ul>
    
    </div>
    </>
)

export default withRouter(Navbar);