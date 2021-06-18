import React from 'react'
import styled from 'styled-components/macro'

import NavBar from '../components/NavBar'
import NavBarLink from '../components/NavBarLink'
import CardList from '../components/CardList'

const CardPage = () => {

  return (
    <Main>
      <NavBar>
        <NavBarLink page='/'>
        <Icon className="fas fa-home">
        </Icon>
          Hem
        </NavBarLink>
      </NavBar>
      <CardList />
    </Main>
  )
}

export default CardPage

const Main = styled.main`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 60px 0;
`
const Icon = styled.i`
   padding-right: 10px;
`