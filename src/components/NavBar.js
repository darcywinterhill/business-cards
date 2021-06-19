import React from 'react'
import styled from 'styled-components/macro'

import NavBarLink from 'components/NavBarLink'

const NavBar = () => {
  return (
    <NavContainer>
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
    </NavContainer>
  )
}

export default NavBar

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: fit-content;
  background-color: #087d74;
`
const Icon = styled.i`
  padding-right: 10px;
`