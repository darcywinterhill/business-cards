import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const Card = ({ id, image, name, surName }) => {

  return (
    <>
      <Link to={`/card/${id}`}>
      <CardContainer
        style={{backgroundImage: `url(${image})`}} alt={name + ' ' + surName}>
          {name}{surName}
      </CardContainer>
      </Link>
    </>
  )
}

export default Card

const CardContainer = styled.div`
  width: 200px;
  height: 200px
  `