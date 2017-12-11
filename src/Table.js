import React, { Component } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class Table extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired
  }

  renderHeader = () => {
    return (
      <thead>
        <Header>
          <th>Repo Name</th>
          <th>Owner</th>
          <th>Description</th>
        </Header>
      </thead>
    )
  }

  renderRow = (data, index) => {
    return (
      <tr key={index}>
        <Name>{data.name}</Name>
        <td>
          <Owner>
            <OwnerAvatar
              alt=''
              src={data.owner.avatar_url} 
            />
            <OwnerName>{data.owner.login}</OwnerName>
          </Owner>
        </td>
        <Description>{data.description}</Description>
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
      <Container>
        {this.renderHeader()}
        {this.renderBody()}
      </Container>
    )
  } 
}

const Container = styled.table`
  border: 1px solid gray;
  border-collapse: collapse;
  padding: 7px;
  margin: auto;
  min-height: 550px;
  td, tr {
    border: 1px solid gray;
    border-collapse: collapse;
    padding: 7px;
  }
`
const Header = styled.tr`
  color: white;
  background-color: #5E227F;
  line-height: 40px;
`
const Name = styled.td`
  width: 150px;
  word-break: break-all;  
`

const Owner = styled.div`
  display: flex;
  align-items: center;
`

const OwnerAvatar = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`

const OwnerName = styled.div`
  width: 150px;
  word-break: break-all;
`

const Description = styled.td`
  width: 800px;
`