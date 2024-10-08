import React from 'react';
import { Provider } from 'react-redux';
import './App.css'
import AppRoutes from './layout/AppRoutes';
import store from './store/store';

export  function App() {
  return (
    <Provider store={store}>
      <AppRoutes/>
    </Provider>
    
    
  );
};

export default App;
