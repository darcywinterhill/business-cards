import React from 'react'
import styled from 'styled-components/macro'

import NavBar from '../components/NavBar'
import NavBarLink from '../components/NavBarLink'

const FrontPage = () => {

  return (
    <Main>
      <NavBar>
        <NavBarLink page='/'>
        <Icon className="fas fa-home">
        </Icon>
          Hem
        </NavBarLink>
        <NavBarLink page='/cards'>
        <Icon className="far fa-address-card">
        </Icon>
          Kontakt
        </NavBarLink>
        <NavBarLink page='#'>
        <Icon className="fas fa-info" >
        </Icon>
          Info
        </NavBarLink>
      </NavBar>
    </Main>
  )
}

export default FrontPage

const Main = styled.main`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const Icon = styled.i`
   padding-right: 10px;
`