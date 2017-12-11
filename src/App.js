import React, { Component } from 'react'

import Loading from './Loading'
import Pagination from './Pagination'
import PropTypes from 'prop-types'
import Table from './Table'
import _ from 'lodash'

export default class App extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired,
    pageNumber: PropTypes.number.isRequired,
    goToPage: PropTypes.func.isRequired
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
    return (
      <div> 
        { !_.isEmpty(this.props.data) 
          ? (
            <div>
              <Table data={this.props.data} />
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
