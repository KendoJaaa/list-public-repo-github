import React, { Component } from 'react'

class Loading extends Component {

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
      <div className='app__loading'>
        {'Loading' +  Array(this.state.dotCount).fill().map(() => '.').join('')}
      </div>
    )
  } 
}

export default Loading