import React from 'react'
import styled from 'styled-components/macro'

const Title = ({ text }) => {
  return (
    <PageTitle>
      {text}
    </PageTitle>
  )
}

export default Title

const PageTitle = styled.h2`
  font-size: 25px;
  padding: 25px;
  text-transform: uppercase;
    @media (min-width: 768px) {
      font-size: 30px;
      padding-bottom: 50px;
    }
`