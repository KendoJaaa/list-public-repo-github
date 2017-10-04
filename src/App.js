import './App.css'

import React, { Component } from 'react'

import Pagination from './Pagination'
import Table from './Table'
import axios from 'axios'

class App extends Component {

  state = {
    showData: []
  }

  componentWillMount () {
    axios.get('https://api.github.com/repositories').then((response) => {
      this.setState({ showData: response.data.slice(0,10) })
    })
  }

  render () {
    return (
      <div className='app'> 
        <div className='app__header'>Github Public Repositories</div>
        <Table data={this.state.showData} />
      </div>
    )
  } 
}

export default App
