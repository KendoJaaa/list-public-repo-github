import React, { Component } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class Pagination extends Component {

  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    onNext: PropTypes.func.isRequired,
    onPrevious: PropTypes.func.isRequired,
  }

  render() {
    return (
      <Container>
        { this.props.currentPage > 1 && 
          <Button onClick={this.props.onPrevious}>{'<'}</Button>}
        <PageNumber>{this.props.currentPage}</PageNumber>
        { this.props.currentPage < 100 && 
          <Button onClick={this.props.onNext}>{'>'}</Button>}
      </Container>
    )
  } 
}

const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`
const Button  = styled.div`
  cursor: pointer;
  border: 2px solid ${props => props.theme.main};
  border-radius: 2px;
  color: ${props => props.theme.main};
  font-weight: bold;
  padding: 0 6px;
  background-color: white;
  &:hover {
    background-color: ${props => props.theme.main};
    color: white;
  }
`
const PageNumber = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
`