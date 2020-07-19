import React from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom'

import './App.scss';

import Main from './components/Main'
import Opening from './components/intro/Opening'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/intro' component={Opening}/>
          <Route path='/' component={Main}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;