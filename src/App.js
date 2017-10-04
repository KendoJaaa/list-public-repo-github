import './App.css'

import React, { Component } from 'react'

import Pagination from './Pagination'
import Table from './Table'
import _ from 'lodash'
import axios from 'axios'

class App extends Component {
  
  maxpage = 0;

  state = {
    currentPage: 1,
    data: []
  }

  componentWillMount () {
    this.fecthData()
  }

  fecthData = () => {
    let url = 'https://api.github.com/repositories'
    if (!_.isEmpty(this.state.data)) {
      url += '?since=' + _.last(this.state.data).id
    }
    axios.get(url).then((response) => {
      const data = _.concat(this.state.data, response.data)
      this.setState({ data })
      this.maxpage = _.floor(data.length / 10)
    })
  }

  onPreviousPage = () => {
    if (this.state.currentPage === 1) return
    this.setState({ currentPage: this.state.currentPage - 1 })
  }

  onNextPage = () => {
    const nextPage = this.state.currentPage + 1
    this.setState({ currentPage: nextPage  })
    if (nextPage > this.maxpage) {
      this.fecthData()
    }
  }

  getDataByPage = () => {
    const startingRecord = (this.state.currentPage * 10) - 10
    return _.slice(this.state.data, startingRecord, startingRecord + 10)
  }

  render () {
    return (
      <div className='app'> 
        <div className='app__header'>Github Public Repositories</div>
        { !_.isEmpty(this.getDataByPage()) 
          ? (
            <div>
              <Table data={this.getDataByPage()} />
              <Pagination 
                currentPage={this.state.currentPage}
                onPrevious={this.onPreviousPage}
                onNext={this.onNextPage}
              />
            </div>
          ) : <div className='app__loading'> 'Loading...' </div>
        }
      </div>
    )
  } 
}

export default App
