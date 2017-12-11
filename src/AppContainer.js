import React, { Component } from 'react'
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'

import App from './App'
import AppData from './AppData'

const theme = {
	main: '#5E227F'
}

export default class AppContainer extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Container>
            <AppHeader>
              <Logo 
                alt=''
                src={require('./logo.png')}
              />
              Github Public Repositories
            </AppHeader>
            <Switch>
              <Route exact path='/' render={() => <Redirect to='/1' />} />
              <Route exact path='/:pageNumber' render={
                ({ match, history }) => {
                  const pageNumber = Number(match.params.pageNumber)
                  if (isNaN(pageNumber)) return <Redirect to='/1' />
                  if (pageNumber < 1 || pageNumber > 100) return <Redirect to='/1' />
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
              <Redirect to="/1" />
            </Switch>
          </Container>
        </Router>
      </ThemeProvider>
    )
  } 
}

const Container = styled.div`
  font-family: 'Open Sans', sans-serif;
`

const AppHeader = styled.div`
  font-size: 36px;
  font-weight: 600;
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