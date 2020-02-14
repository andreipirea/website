import React from 'react';
import {BrowserRouter, Switch , Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage'
import TodoForm from './components/todoform2/TodoForm'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/'
            component={HomePage}
          />
          <Route 
            path='/taskmanager'
            component={TodoForm}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
