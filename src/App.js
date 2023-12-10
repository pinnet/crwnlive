/*
 * App.js
 * Created on Fri Dec 08 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import setCurrentUser from './store/user/user.actions';
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
