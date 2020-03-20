import React from 'react';
import {BrowserRouter, Switch , Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage'
import TodoForm from './components/todoform2/TodoForm'
import Weather from './components/Weather/Weather'
import {WeatherProvider} from './context/WeatherContext'

// import { router } from 'json-server';

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
          <WeatherProvider>
            <Route
              path='/weather'
              component={Weather}
            />
          </WeatherProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
