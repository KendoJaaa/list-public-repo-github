import './App.css'

import React, { Component } from 'react'

import Pagination from './Pagination'
import Table from './Table'
import axios from 'axios'

class App extends Component {

  state = {
    currentPage: 1,
    data: []
  }

  componentWillMount () {
    axios.get('https://api.github.com/repositories').then((response) => {
      this.setState({ data: response.data })
    })
  }

  onPreviousPage = () => {
    if (this.state.currentPage === 1) return
    this.setState({ currentPage: this.state.currentPage -1 })
  }

  onNextPage = () => {
    console.log('kendo jaa click')
    this.setState({ currentPage: this.state.currentPage + 1 })
  }

  getDataByPage = () => {
    const startingRecord = (this.state.currentPage * 10) - 10
    console.log('kendo jaa', startingRecord)
    return this.state.data.slice(startingRecord, startingRecord + 10)
  }

  render () {
    return (
      <div className='app'> 
        <div className='app__header'>Github Public Repositories</div>
        <Table data={this.getDataByPage()} />
        <Pagination 
          currentPage={this.state.currentPage}
          onPrevious={this.onPreviousPage}
          onNext={this.onNextPage}
        />
      </div>
    )
  } 
}

export default App
