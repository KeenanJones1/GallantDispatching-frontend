import React, { Component } from 'react'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import About from './pages/About'
import Contact from './pages/Contact'
import Layout from './hocs/Layout'

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        </Layout>
      </Router>
    )
  }
}

export default App