import React, { Component } from 'react'
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import AppData from './AppData'
import styled from 'styled-components'

export default class AppContainer extends Component {
  render () {
    return (
      <Router>
        <Container>
          <AppHeader>
            <Logo 
              alt=''
              src={require('./logo.png')}
            />
            Github Public Repositories
          </AppHeader>
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
        </Container>
      </Router>
    )
  } 
}

const Container = styled.div`
  font-family: 'Open Sans', sans-serif;
`

const AppHeader = styled.div`
  font-size: 36px;
  margin: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`