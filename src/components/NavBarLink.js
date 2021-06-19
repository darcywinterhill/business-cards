import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const NavBarLink = ({
  children,
  page
  }) => {

  return (
    <NavBarLinkContainer>
      <NavLink to={page}>
        {children}
      </NavLink>
    </NavBarLinkContainer>
  )
}

export default NavBarLink

const NavBarLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 33.3%;
    @media (min-width: 768px) {
      width: fit-content;
    }
`
const NavLink = styled(Link)`
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  font-weight: bolder;
  padding: 20px 0;
    @media (min-width: 768px) {
      padding: 20px 30px;
    }
    @media (min-width: 1025px) {
      font-size: 18px;
      padding: 20px 40px;
        &:hover {
          text-decoration: underline;
          background-color: #00313d;
        }
    }
`
