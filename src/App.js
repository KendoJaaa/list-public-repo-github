import './App.css'

import React, { Component } from 'react'

import Pagination from './Pagination'
import PropTypes from 'prop-types'
import Table from './Table'
import _ from 'lodash'
import axios from 'axios'

class App extends Component {
  
  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  maxpage = 0;

  state = {
    data: []
  }

  componentWillMount () {
    this.fecthData()
  }

  getCurrentPage () {
    return Number(this.props.match.params.pageId)
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
    if (this.getCurrentPage() === 1) return
    this.props.history.push('/' + (this.getCurrentPage() - 1))
  }

  onNextPage = () => {
    const nextPage = this.getCurrentPage() + 1
    this.props.history.push('/' + nextPage)
    if (nextPage > this.maxpage) {
      this.fecthData()
    }
  }

  getDataByPage = () => {
    const startingRecord = (this.getCurrentPage() * 10) - 10
    return _.slice(this.state.data, startingRecord, startingRecord + 10)
  }

  render () {
    return (
      <div className='app'> 
        { !_.isEmpty(this.getDataByPage()) 
          ? (
            <div>
              <Table data={this.getDataByPage()} />
              <Pagination 
                currentPage={this.getCurrentPage()}
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
