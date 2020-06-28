import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';

// provider and store
import { Provider } from "react-redux";
import store from "./data/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
