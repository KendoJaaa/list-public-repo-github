import React, { Component } from 'react'

import Loading from './Loading'
import Pagination from './Pagination'
import PropTypes from 'prop-types'
import Table from './Table'
import _ from 'lodash'
import styled from 'styled-components'

export default class App extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired,
    pageNumber: PropTypes.number.isRequired,
    goToPage: PropTypes.func.isRequired
  }

  onPreviousPage = () => {
    if (this.props.pageNumber === 1) return
    this.props.goToPage(this.props.pageNumber - 1)
  }

  onNextPage = () => {
    const nextPage = this.props.pageNumber + 1
    this.props.goToPage(nextPage)
  }
  
  render () {
    return (
      <div> 
        { !_.isEmpty(this.props.data) 
          ? (
            <Container>
              <PaginationContainer>
                <Pagination 
                  currentPage={this.props.pageNumber}
                  onPrevious={this.onPreviousPage}
                  onNext={this.onNextPage}
                />
              </PaginationContainer>
              <Table data={this.props.data} />
            </Container>
          ) : <Loading />
        }
      </div>
    )
  } 
}


const Container = styled.div`
  max-width: 1000px;
  padding: 0 5%;
  margin: 0 auto;
`

const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`