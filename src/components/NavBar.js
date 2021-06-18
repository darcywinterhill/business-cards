import React from 'react'
import styled from 'styled-components/macro'

const NavBar = ({ children }) => {
  return (
    <NavContainer>
      {children}
    </NavContainer>
  )
}

export default NavBar


const NavContainer = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  background-color: #005d75;
`