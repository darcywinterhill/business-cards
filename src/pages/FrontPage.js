import React from 'react'
import styled from 'styled-components/macro'

import CardList from '../components/CardList'

const FrontPage = () => {

  return (
    <Main>
      <CardList />
    </Main>
  )
}

export default FrontPage

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`