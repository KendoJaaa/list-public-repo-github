import React, { Component } from 'react'

import styled from 'styled-components'

export default class Loading extends Component {
  interval = null
  state = {
    dotCount: 1
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      this.setState({ dotCount: this.state.dotCount === 3 ? 0 : this.state.dotCount + 1 })
    }, 100)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }
  
  render () {
    return (
      <Container>
        {'Loading' +  Array(this.state.dotCount).fill().map(() => '.').join('')}
      </Container>
    )
  } 
}

const Container = styled.div`
  font-size: 28px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`