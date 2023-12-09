/**
 * @file FILEPATH: /home/danny/localdev/javascript/reactredux/crwn/src/components/nav-bar/nav-bar.component.jsx
 * @description Renders the navigation bar component.
 * @module NavBar
 * @returns {JSX.Element} The rendered navigation bar.
 * @exports NavBar
 */
/*
 * Created on Sat Dec 09 2023
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
import { CartContext } from '../../contexts/cart.context';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
/**
 * Renders the navigation bar component.
 * @returns {JSX.Element} The rendered navigation bar.
 */
const NavBar = () => {
    const { isVisable, setVisable } = useContext(CartContext);
    console.log('NavBar isVisable: ', isVisable);
    const { currentUser} = useContext(UserContext);
    const  signOutHandler = async() => {
        await signUserOut();
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
                            <span><Link className='nav-link' to="/auth">Sign in</Link></span>
                        )
                    }
                    <CartIcon onClick={()=>{setVisable(!isVisable)}}/>
                </div>
                    {
                        isVisable ? <CartDropdown /> : null
                    }
            </div>
            <Outlet />
        </Fragment>
    );
}
export default NavBar;