import React from 'react'
import ReactDOM from 'react-dom'
import { getDataByPage } from './App'

describe('getDataByPage', () => {
  const mockData = Array(100).fill().map((v, index) => index + 1)
  it('should return first ten records when it is the first page', () => {
    const result = getDataByPage(mockData, 1)
    expect(result.length).toEqual(10)
    expect(result[0]).toEqual(1)
  })
  it('should return empty array if the records do not exist', () => {
    const result = getDataByPage(mockData, 11)
    expect(result).toEqual([])
  })
  it('should return correct 10 records if the records exist', () => {
    const result = getDataByPage(mockData, 5)
    expect(result.length).toEqual(10)
    expect(result[0]).toEqual(41)
  })
})