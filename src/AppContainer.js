import React, { Component } from 'react'
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom'

import AppData from './AppData'

class AppContainer extends Component {
  render () {
    return (
      <Router>
        <div>
          <div className='app__header'>Github Public Repositories</div>
          <Route exact path='/' render={() => <Redirect to='/1' />} />
          <Route exact path='/:pageNumber' render={
            ({ match, history }) => <AppData 
              pageNumber={Number(match.params.pageNumber)}
              goToPage={(pageNumber) => history.push('/' + pageNumber)}
            />
          } />
        </div>
      </Router>
    )
  } 
}

export default AppContainer
