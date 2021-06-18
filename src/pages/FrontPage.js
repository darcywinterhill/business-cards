import React from 'react'
import styled from 'styled-components/macro'

import NavBar from '../components/NavBar'
import NavBarLink from '../components/NavBarLink'
import Title from '../components/Title'

const FrontPage = () => {

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
      <ContentContainer>
        <Title text='Hello world!' />
      </ContentContainer>
    </Main>
  )
}

export default FrontPage

const Main = styled.main`
  position: relative;
  min-height: 100vh;
  background-color: #e7efee;
`
const Icon = styled.i`
  padding-right: 10px;
`
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
`