/*
 * nav-bar.component.jsx
 * Created on Fri Dec 08 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */

import './nav-bar.styles.scss'
import { signUserOut } from '../../utils/firebase.utils';
import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
/**
 * Renders the navigation bar component.
 * @returns {JSX.Element} The rendered navigation bar.
 */
const NavBar = () => {
    const { currentUser,setCurrentUser } = useContext(UserContext);
    const  signOutHandler = async() => {
        await signUserOut();
        setCurrentUser(null);
    }
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
                    {
                        currentUser ? (
                        <span className='nav-link' onClick={() => signOutHandler()}>Sign out</span>) : (
                        <span><Link className='nav-link' to="/auth">Sign in</Link></span>)
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}
export default NavBar;