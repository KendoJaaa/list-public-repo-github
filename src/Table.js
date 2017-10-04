import './Table.css'

import React, { Component } from 'react'

import PropTypes from 'prop-types'

class Table extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired
  }

  renderHeader = () => {
    return (
      <tr>
        <th>Name</th>
        <th>Owner</th>
        <th>Description</th>
      </tr>
    )
  }

  renderRow = (data) => {
    return (
      <tr>
        <td>{data.name}</td>
        <td>
          <img src={data.owner.avatar_url} />
          {data.owner.login}
        </td>
        <td>{data.description}</td>
      </tr>
      
    )
  }

  renderBody = () => {
    return this.props.data.map((data) => this.renderRow(data))
  }

  render() {
    return (
      <table>
        {this.renderHeader()}
        {this.renderBody()}
      </table>
    )
  } 
}

export default Table
