import React from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom'

import './App.scss';

import Main from './components/Main'
import Opening from './components/intro/Opening'
import Second from './components/intro/Second'
import Third from './components/intro/Third'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/intro' component={Opening}/>
          <Route path='/intro2' component={Second}/>
          <Route path='/intro3' component={Third}/>
          <Route path='/' component={Main}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;