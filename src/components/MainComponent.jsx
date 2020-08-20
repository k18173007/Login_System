import React, { Component } from 'react'
import { Switch, Redirect, Route, withRouter } from 'react-router-dom'
import HomeComponent from './HomeComponent'
import HeaderComponent from './HeaderComponent'
import LoginComponent from './LoginComponent'
import RegisterComponent from './RegisterComponent'

class MainComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <HeaderComponent />
        <Switch>
          <Route path="/home" component={HomeComponent} />
          <Route path="/register" component={RegisterComponent} />
          <Route path="/login" component={LoginComponent} />
          <Redirect path="/home" />
        </Switch>
      </>
    )
  }
}

export default withRouter(MainComponent)
