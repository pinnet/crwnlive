import { createContext,useState,useEffect } from 'react';
import { onAuthStateChangedListener,createUserDocumentFromGoogleAuth} from '../utils/firebase.utils';
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  let isMounted = false;
  useEffect(() => {
    if (!isMounted) {
        // eslint-disable-next-line
        isMounted = true;
        const unsub = onAuthStateChangedListener((user) => {
            if (user) {
              createUserDocumentFromGoogleAuth(user)
              setCurrentUser(user);
            }
            setCurrentUser(user);
        });
        console.log(unsub);
    }
  }, [isMounted]); 


  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}