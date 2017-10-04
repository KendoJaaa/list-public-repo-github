import './Pagination.css'

import React, { Component } from 'react'

import PropTypes from 'prop-types'

class Pagination extends Component {

  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    onNext: PropTypes.func.isRequired,
    onPrevious: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className='pagination'>
        { this.props.currentPage !== 1 && 
          <div className='pagination__button' onClick={this.props.onPrevious}>Prev</div>}
        {this.props.currentPage}
        <div className='pagination__button' onClick={this.props.onNext}>Next</div> 
      </div>
    )
  } 
}

export default Pagination
