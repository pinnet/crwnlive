/**
*  @file App.js
*  @created Mon Dec 11 2023
*  @copyright Copyright (c) 2023 dannyarnold.com
*  @author Danny Arnold
**/
//#region library imports
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { Routes, Route } from 'react-router-dom';
//#endregion
//#region custom imports
import { checkUserSession } from './store/user/user.actions';
import Navigation from './components/navigation/navigation.component';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Contact from './routes/contact/contact.component';
import Authentication from './routes/auth/authtentication.component';
import Checkout from './routes/checkout/checkout.component';
//#endregion

/**
 * The main component of the application.
 * @returns {JSX.Element} The rendered App component.
 */
const App = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
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
