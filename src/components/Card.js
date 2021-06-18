import React from 'react'
import styled from 'styled-components/macro'

import img from '../assets/graphic.jpg'

const Card = ({ id, image, name, surName, email, telephone }) => {

  return (
    <>
      <CardContainer style={{backgroundImage: `url(${img})`}} alt='Graphical pink and blue pattern.'>
        <ImageContainer
          style={{backgroundImage: `url(${image})`}} alt={name + ' ' + surName}
        />
        <Content>
          <Name>
            {name} {surName}
          </Name>
          <Contacts>
            <MailLink href={`mailto:${email}`}>
              {email}
            </MailLink>
          </Contacts>
          <Contacts>
            
            {telephone}
          </Contacts>
        </Content>
      </CardContainer>
    </>
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
    @media (min-width: 1025px) {
      width: 500px;
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
`
const Name = styled.h3`

font-size: 20px;
`
const Contacts = styled.h4``
const MailLink = styled.a`
`
