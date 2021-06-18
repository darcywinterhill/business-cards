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
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: fit-content;
  background-color: #087d74;
`