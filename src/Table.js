import './Table.css'

import React, { Component } from 'react'

import PropTypes from 'prop-types'

class Table extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired
  }

  renderHeader = () => {
    return (
      <thead>
        <tr className='table__header'>
          <th>Name</th>
          <th>Owner</th>
          <th>Description</th>
        </tr>
      </thead>
    )
  }

  renderRow = (data, index) => {
    return (
      <tr key={index} className='table__row'>
        <td className='table__name'>{data.name}</td>
        <td>
          <div className='table__owner'>
            <img
              alt=''
              src={data.owner.avatar_url} 
              className='table__owner__avatar' 
            />
            <div className='table__owner__name'>{data.owner.login}</div>
          </div>
        </td>
        <td className='table__description'>{data.description}</td>
      </tr>
      
    )
  }

  renderBody = () => {
    return (
      <tbody>
        {this.props.data.map((data, index) => this.renderRow(data, index))}
      </tbody>
    )
  }

  render() {
    return (
      <table className='table'>
        {this.renderHeader()}
        {this.renderBody()}
      </table>
    )
  } 
}

export default Table
