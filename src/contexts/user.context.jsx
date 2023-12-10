/**
 * @fileoverview Defines the UserContext and its initial values.
 * @module UserContext
 */
/*
 * Created on Sat Dec 09 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */
import { createContext,useEffect,useReducer } from 'react';
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

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state,action) => {

  const { type, payload } = action;
  switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }

}
const INITIAL_STATE = {
  currentUser: null
};
/**
 * UserProvider component that provides user context to its children.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The children components.
 * @returns {JSX.Element} The UserProvider component.
 */
export const UserProvider = ({ children }) => {
  const[ { currentUser } , dispatch ] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch({
      type: USER_ACTION_TYPES.SET_CURRENT_USER,
      payload: user
    });
  }
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