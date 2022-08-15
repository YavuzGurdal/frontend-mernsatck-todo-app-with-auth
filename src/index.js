import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { UpdateTodoProvider } from './context/updateTodoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UpdateTodoProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </UpdateTodoProvider>
  </React.StrictMode>
);
