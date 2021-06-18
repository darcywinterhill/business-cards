import React from 'react'
import styled from 'styled-components/macro'

import NavBar from '../components/NavBar'
import NavBarLink from '../components/NavBarLink'
import CardList from '../components/CardList'
import Title from '../components/Title'

const CardPage = () => {

  return (
    <Main>
      <NavBar>
      <NavBarLink page='/'>
        <Icon className='fas fa-home'>
        </Icon>
          Hem
        </NavBarLink>
        <NavBarLink page='/cards'>
        <Icon className='far fa-address-card'>
        </Icon>
          Kontakt
        </NavBarLink>
        <NavBarLink page='/info'>
        <Icon className='fas fa-info'>
        </Icon>
          Info
        </NavBarLink>
      </NavBar>
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
const Icon = styled.i`
   padding-right: 10px;
`