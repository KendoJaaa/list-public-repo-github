import React, { Component } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class Table extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired
  }

  renderHeader = () => {
    return (
      <Header>
        <Name>Repo Name</Name>
        <Owner>Owner</Owner>
        <Description>Description</Description>
        <Link>Link</Link>
      </Header>
    )
  }

  renderRow = (data, index) => {
    return (
      <Row key={index}>
        <Name>{data.name}</Name>
        <Owner>
          <OwnerAvatar
            alt=''
            src={data.owner.avatar_url} 
          />
          <OwnerName>{data.owner.login}</OwnerName>
        </Owner>
        <Description>{data.description}</Description>
        <Link>
          <a href={data.html_url} target='_blank' >
            <Icon src={require('./link.png')} />
          </a>
        </Link>
      </Row>   
    )
  }

  renderBody = () => {
    return this.props.data.map((data, index) => this.renderRow(data, index))
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

const Container = styled.div`
  margin: auto;
  min-height: 550px;
`
const Header = styled.div`
  color: white;
  background-color: ${props => props.theme.main};
  display: flex;
  padding: 10px;
  font-weight: bold;
`

const Row = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.main};
  padding: 10px;
`

const Unit = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
  word-break: break-all;
`

const Name = Unit.extend`
  width: 150px;
`

const Owner = Unit.extend`
  width: 150px;
`

const OwnerAvatar = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`

const OwnerName = styled.div`
  word-break: break-all;
`

const Description = Unit.extend`
  flex: 1;
`

const Link = Unit.extend`
  width: 40px;
  padding-right: 0;
  justify-content: center;
`
const Icon = styled.img`
  width: 30px;
  height: 30px;
`