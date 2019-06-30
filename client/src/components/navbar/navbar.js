import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth';
import './Navbar.css';


const Navbar = ({history}) => (
    <nav className="navbar navbar-expand-lg">
    <div className="navbar-top">
        <Link 
            to="/"
            className="page-brand navbar-title">
            Appy-Angelhack
        </Link>
    </div>
    <button 
        className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
        <span className="navbar-toggler-icon icon-bar"></span>
        <span className="navbar-toggler-icon icon-bar"></span>
        <span className="navbar-toggler-icon icon-bar"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            {isAuthenticated() ? (
                <>
                <div className="nav">
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
            ) : (
                <>
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
                </>
            )}
        </ul>
    </div>
    </nav>
)

export default withRouter(Navbar);