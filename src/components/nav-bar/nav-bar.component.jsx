/*
 * nav-bar.component.jsx
 * Created on Fri Dec 08 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */

import './nav-bar.styles.scss'
import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
/**
 * Renders the navigation bar component.
 * @returns {JSX.Element} The rendered navigation bar.
 */
const NavBar = () => {
    const { user } = useContext(UserContext);
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
                    <Link className='nav-link' to="/auth">{ (user === null)? 'Sign in' : 'Sign out'}</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}
export default NavBar;