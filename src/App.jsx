import React from 'react';
import { Route, Switch } from 'react-router'
import './App.js';

import Home from './screens/Home/Home.jsx'


function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="projects"></Route>

        <Route path="/about"></Route>
        <Route path="contact"></Route>
      </Switch>
    </>
  )
}

export default App;