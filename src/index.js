import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bulma/css/bulma.css'
import './styles.css'
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
// import reportWebVitals from './reportWebVitals';
// const el = document.getElementById('root')
// const root = ReactDOM.createRoot(el);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
         <App />
    </Provider>


);
