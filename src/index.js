import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import { bookReducer } from './reducers';
import reportWebVitals from './reportWebVitals';

const initialState = {
  books: {
    book1: {
      id: 1,
      title: 'avenger',
      category: 'Action',
    },
    book2: {
      id: 2,
      title: 'king kong',
      category: 'History',
    },
  },
};

const store = createStore(bookReducer);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default initialState;
