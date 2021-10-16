import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import ProjectList from './components/ProjectList'
import ProjectCreate from './components/ProjectCreate'
import UsersList from './components/UsersList'
import {Navigation} from './components/Navbar'

import "bootswatch/dist/lux/bootstrap.min.css"

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route exact path="/" component={ProjectList}/>
        <Route exact path="/new-project" component={ProjectCreate}/>
        <Route exact path="/Users" component={UsersList}/>
      </Switch>
    </Router>
    
  );
}

export default App;
