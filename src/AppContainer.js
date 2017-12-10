import React, { Component } from 'react'
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom'

import App from './App'

class AppContainer extends Component {

  render () {
    return (
      <Router>
        <div>
          <div className='app__header'>Github Public Repositories</div>
          <Route exact path='/' render={() => (<Redirect to='/1' />)} />
          <Route exact path='/:pageId' component={App}/>
        </div>
    </Router>
    )
  } 
}

export default AppContainer
