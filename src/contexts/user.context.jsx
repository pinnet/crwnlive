/*
 * user.context.jsx
 * Created on Sat Dec 09 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */
 /**
 * @fileoverview Defines the UserContext and its initial values.
 * @module UserContext
 */

import { createContext,useState,useEffect } from 'react';
import { onAuthStateChangedListener,createUserDocumentFromGoogleAuth} from '../utils/firebase.utils';

/**
 * UserContext is a context object that provides the current user and a function to update the current user.
 * @typedef {Object} UserContext
 * @property {Object|null} currentUser - The current user object. Defaults to null.
 * @property {Function} setCurrentUser - A function to update the current user.
 */
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
});

/**
 * UserProvider component that provides user context to its children.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The children components.
 * @returns {JSX.Element} The UserProvider component.
 */
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromGoogleAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  },[]); 
  
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}