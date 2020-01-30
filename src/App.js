import React from 'react';
import {Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage'

const App = () => {
  return (
    <div>
      <Route
        exact
        path='/'
        component={HomePage}
      />
    </div>
  );
}

export default App;
