import React from 'react'
import styled from 'styled-components/macro'

import NavBar from '../components/NavBar'
import NavBarLink from '../components/NavBarLink'
import Title from '../components/Title'

const InfoPage = () => {

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
        <Title text='Info' />
        <InfoText>
          Sweet roll gummies soufflé jelly-o cotton candy cake. Pudding fruitcake pudding dessert chocolate cake jujubes sweet roll marshmallow powder. Wafer bear claw sesame snaps lemon drops gummies.  Dragée lemon drops pie. Candy canes pie croissant jelly-o oat cake marzipan.
        </InfoText>
        <InfoText>
        Gingerbread chocolate cake tootsie roll candy pie sweet roll sweet roll. Cheesecake brownie macaroon. Jelly biscuit carrot cake brownie donut apple pie cupcake danish. Sugar plum powder lemon drops gummi bears sweet chocolate bar gummi bears candy. 
        </InfoText>
        <InfoText>
        Dessert sweet roll cheesecake dessert lollipop cupcake biscuit pastry gummi bears. Macaroon cookie dessert sweet cake. Dragée tiramisu chocolate cake cake tiramisu pastry jelly beans cupcake. Cupcake tiramisu candy cookie jelly beans lemon drops.
        </InfoText>
      </ContentContainer>
    </Main>
  )
}

export default InfoPage

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
  flex-direction: column;
  align-items: center;
  width: 100vw;
`
const InfoText = styled.p`
  font-family: 'Arial', sans-serif;
  margin-bottom: 20px;
  width: 80vw;
  font-size: 16px;
    @media (min-width: 768px) {
      width: 70vw;
    }
    @media (min-width: 768px) {
      width: 50vw;
    }
`