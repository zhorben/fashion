import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const IndexApp = ({ testText }) => {
  return <Title>{testText}</Title>
}

export default connect((state) => ({
  testText: state.app.testText
}))(IndexApp)
