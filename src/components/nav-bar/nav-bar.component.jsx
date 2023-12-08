/*
 * nav-bar.component.jsx
 * Created on Fri Dec 08 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */

import './nav-bar.styles.scss'
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

/**
 * Renders the navigation bar component.
 * @returns {JSX.Element} The rendered navigation bar.
 */
const NavBar = () => {

    return (
        <Fragment>
            <div className="navigation">
                <Link className='logo-container' to="/">
                    <Logo className='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="/shop">Shop</Link>
                    <Link className='nav-link' to="/contact">Contact</Link>
                    <Link className='nav-link' to="/auth">Sign in</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}
export default NavBar;