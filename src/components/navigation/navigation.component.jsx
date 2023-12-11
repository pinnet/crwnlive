/**
 * @file FILEPATH: /home/danny/localdev/javascript/reactredux/crwn/src/components/navigation/navigation.component.jsx
 * @description Renders the navigation bar component.
 * @module Navigation
 * @returns {JSX.Element} The rendered navigation bar.
 * @exports Navigation
 */
/*
 * Created on Sat Dec 09 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */
import { useSelector } from 'react-redux';
import { selectCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { NavigationContainer, LogoContainer, NavLinks, NavLink} from './navigation.styles'
import { signUserOut } from '../../utils/firebase.utils';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
/**
 * Renders the navigation bar component.
 * @returns {JSX.Element} The rendered navigation bar.
 */
const Navigation = () => {
    const isCartOpen = useSelector(selectCartOpen);
    const currentUser = useSelector(selectCurrentUser);
    const  signOutHandler = async() => {
        await signUserOut();
    }
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <Logo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    {
                        currentUser ? (
                            <NavLink onClick={() => signOutHandler()}>Sign out</NavLink>) : (
                            <NavLink to="/auth">Sign in</NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
                    { isCartOpen && <CartDropdown /> }
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}
export default Navigation;