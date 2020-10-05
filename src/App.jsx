import React from 'react';
import { Route, Switch } from 'react-router'
import './App.js';

import Home from './screens/Home/Home.jsx'
import Projects from './screens/Projects/Projects.jsx'
import About from './screens/About/About.jsx'
import Contact from './screens/Contact/Contact.jsx'

function App() {
  return (
    <>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  )
}

export default App;