import React from 'react'
import styled from 'styled-components/macro'

import NavBar from '../components/NavBar'
import CardList from '../components/CardList'
import Title from '../components/Title'

const CardPage = () => {

  return (
    <Main>
      <NavBar />
      <Title text='Kontakt' />
      <CardList />
    </Main>
  )
}

export default CardPage

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #e7efee;
`