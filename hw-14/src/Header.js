import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <header className="main-header">
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <form className="header-search-form">
                            <input className="page-search" type="text" placeholder="Search" size="20"/>
                                <button className="search-btn" type="submit">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                        </form>
                        <div className="header-links">
                            <a href="#" className="link-login">
                                <i className="fa fa-user-circle-o" aria-hidden="true"></i>Login
                            </a>
                            <a href="#" className="link-register">
                                <i className="fa fa-pencil" aria-hidden="true"></i>Register
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <div className="row">
                        <h1>
                            <Link to="/">
                                <img className="logo" src="images/logo.png" alt="logo"/>
                            </Link>
                        </h1>
                        <nav>
                            <ul className="header-nav">
                                <li>
                                    <Link to="/">home</Link>
                                </li>
                                <li>
                                    <Link to="/typography">typography</Link>
                                </li>
                                <li>
                                    <Link to="/blog">blog</Link>
                                </li>
                                <li>
                                    <Link to="/pages">pages</Link>
                                </li>
                                <li>
                                    <Link to="/elements">elements</Link>
                                </li>
                                <li>
                                    <Link to="/elements">ecommerse</Link>
                                </li>
                                <li>
                                    <Link to="/elements">mega menu</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        
    );
};

export default Header;