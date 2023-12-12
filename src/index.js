/**
 * @file index.js
 * @description Entry point of the React application.
 * @created Fri Dec 08 2023
 * @copyright Copyright (c) 2023, dannyarnold.com
 * @author Danny Arnold
 */

//Package imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

//Local imports
import './index.scss';
import{ store,persistor } from './store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter> 
  </PersistGate>
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
