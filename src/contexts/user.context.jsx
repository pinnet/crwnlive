import { createContext,useState,useEffect } from 'react';
import { onAuthStateChangedListener,createUserDocumentFromGoogleAuth} from '../utils/firebase.utils';
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