import './App.css'

import React, { Component } from 'react'

import App from './App'
import PropTypes from 'prop-types'
import _ from 'lodash'
import axios from 'axios'

export default class AppData extends Component {
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
  
  render () {
    const data = getDataByPage(this.state.data, this.props.pageNumber)
    return (
      <App 
        data={data} 
        pageNumber= {this.props.pageNumber}
        goToPage= {this.props.goToPage}
      />
    )
  } 
}

export const getDataByPage = (data, pageNumber) => {
  const startingRecord = (pageNumber * 10) - 10
  return _.slice(data, startingRecord, startingRecord + 10)
}

