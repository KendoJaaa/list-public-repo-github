import React, { Component } from 'react'
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import AppData from './AppData'
import styled from 'styled-components'

export default class AppContainer extends Component {
  render () {
    return (
      <Router>
        <div>
          <AppHeader>Github Public Repositories</AppHeader>
          <Route exact path='/' render={() => <Redirect to='/1' />} />
          <Route exact path='/:pageNumber' render={
            ({ match, history }) => {
              const pageNumber = Number(match.params.pageNumber)
              return (
                <AppData pageNumber={pageNumber}>
                  {(data) => <App
                    data={data}
                    pageNumber={pageNumber}
                    goToPage={(pageNumber) => history.push('/' + pageNumber)}
                  />}
                </AppData>
              )
            }
          }/>
        </div>
      </Router>
    )
  } 
}

const AppHeader = styled.div`
  text-align: center;
  font-size: 36px;
  margin: 50px;
`

