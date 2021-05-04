import React, { Component } from 'react'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import About from './pages/About'
import Contact from './pages/Contact'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={Landing}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </Router>
    )
  }
}

export default App