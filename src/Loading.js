import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

export default class Loading extends Component {
  interval = null
  state = {
    dotCount: 1
  }

  render () {
    return (
      <Container>
        <FirstChild />
        <SecondChild />
        <ThirdChild />
      </Container>
    )
  }
}


const Container = styled.span`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  margin: auto;
  width: auto;
`

const bounce = keyframes`
  0%, 80%, 100% { transform scale(0) }
  40% { transform scale(1) }
`

const Child = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: ${props => props.theme.main};
  animation: ${bounce} 1.4s infinite ease-in-out both;
`

const FirstChild = Child.extend`
  animation-delay: -0.32s;
`;

const SecondChild = Child.extend`
  animation-delay: -0.16s;
`;

const ThirdChild = Child.extend`
  animation-delay: 0;
`;

