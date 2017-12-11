import './App.css'

import React, { Component } from 'react'

import Loading from './Loading'
import Pagination from './Pagination'
import PropTypes from 'prop-types'
import Table from './Table'
import _ from 'lodash'
import axios from 'axios'

class App extends Component {
  
  maxPage = 0
  fetching = false

  static propTypes = {
    pageNumber: PropTypes.number.isRequired,
    goToPage: PropTypes.func.isRequired
  }

  state = {
    data: []
  }

  componentWillMount () {
    this.fetchData()
  }

  componentDidUpdate () {
    this.fetchData()
  }

  fetchData = () => {
    if (this.maxPage < this.props.pageNumber && !this.fetching) {  
      this.fetching = true  
      let url = 'https://api.github.com/repositories'
      if (!_.isEmpty(this.state.data)) {
        url += '?since=' + _.last(this.state.data).id
      }
      axios.get(url)
        .then((response) => {
          const data = _.concat(this.state.data, response.data)
          this.setState({ data })
          this.fetching = false
          this.maxPage = _.floor(data.length / 10)
          this.fetchData()
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }

  onPreviousPage = () => {
    if (this.props.pageNumber === 1) return
    this.props.goToPage(this.props.pageNumber - 1)
  }

  onNextPage = () => {
    const nextPage = this.props.pageNumber + 1
    this.props.goToPage(nextPage)
  }
  
  render () {
    const data = getDataByPage(this.state.data, this.props.pageNumber)
    return (
      <div className='app'> 
        { !_.isEmpty(data) 
          ? (
            <div>
              <Table data={data} />
              <Pagination 
                currentPage={this.props.pageNumber}
                onPrevious={this.onPreviousPage}
                onNext={this.onNextPage}
              />
            </div>
          ) : <Loading />
        }
      </div>
    )
  } 
}

export const getDataByPage = (data, pageNumber) => {
  const startingRecord = (pageNumber * 10) - 10
  return _.slice(data, startingRecord, startingRecord + 10)
}

export default App
