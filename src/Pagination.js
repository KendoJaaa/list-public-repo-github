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
        { this.props.currentPage !== 1 && 
          <Button onClick={this.props.onPrevious}>Prev</Button>}
        {this.props.currentPage}
        <Button onClick={this.props.onNext}>Next</Button> 
      </Container>
    )
  } 
}

const Container = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
`
const Button  = styled.div`
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 2px;
  padding: 10px;
  margin: 0 10px;
  color: white;
  background-color: #5E227F;
  &:hover {
    background-color: #511272;
  }
`