import React from 'react'
import styled from 'styled-components/macro'

import img from '../assets/graphic.jpg'

const Card = ({
  image,
  name,
  surName,
  email,
  telephone
  }) => {

  return (
    <CardContainer
      style={{backgroundImage: `url(${img})`}}
      alt='Graphical pink and blue pattern.'
    >
      <ImageContainer
        style={{backgroundImage: `url(${image})`}}
        alt={name + ' ' + surName}
      />
      <Content>
        <Name>
          {name} {surName}
        </Name>
        <Contacts>
        <Icon className='far fa-envelope'>
        </Icon>
          <MailLink href={`mailto:${email}`}>
            {email}
          </MailLink>
        </Contacts>
        <Contacts>
          <Icon className='fas fa-phone'>
          </Icon>
          {telephone}
        </Contacts>
      </Content>
    </CardContainer>
  )
}

export default Card

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  height: auto;
  margin: 15px;
  padding: 10px;
  border: solid black 1px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: transform .5s ease;
    @media (min-width: 768px) {
      margin: 40px;
    }
    @media (min-width: 1025px) {
      &:hover {
        transform: scale(1.2);
      }
    }
`
const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  border: solid black 1px;
`
const Content = styled.div`
  padding: 5px;
  width: 200px;
  background-color: #fff;
  border: solid black 1px;
  border-radius: 0 0 10px 10px;
  padding-bottom: 10px;
`
const Name = styled.h3`
  font-size: 20px;
  padding: 10px 5px;
`
const Contacts = styled.p`
  font-size: 14px;
  font-family: 'Arial', sans-serif;
  padding: 2.5px 5px;
`
const Icon = styled.i`
  margin-right: 10px;
`
const MailLink = styled.a`
  font-family: 'Arial', sans-serif;
`

