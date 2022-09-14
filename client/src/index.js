import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// // import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import '../node_modules/react-loader-spinner/dist/'
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import reduxStore from './redux';
import { BrowserRouter } from 'react-router-dom'

const { store, persistor } = reduxStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>

);

