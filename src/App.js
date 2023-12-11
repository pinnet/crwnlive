/**
*  @file App.js
*  @created Mon Dec 11 2023
*  @copyright Copyright (c) 2023 dannyarnold.com
*  @author Danny Arnold
**/
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// --------------------------------------------------------
import { setCurrentUser } from './store/user/user.actions';
import { onAuthStateChangedListener, createUserDocumentFromGoogleAuth } from './utils/firebase.utils';
import Navigation from './components/navigation/navigation.component';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Contact from './routes/contact/contact.component';
import Authentication from './routes/auth/authtentication.component.jsx';
import Checkout from './routes/checkout/checkout.component.jsx';

/**
 * The main component of the application.
 * @returns {JSX.Element} The rendered App component.
 */
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromGoogleAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  },[dispatch]);
  

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout/>} />
      </Route>
    </Routes>
  )
}

export default App;
