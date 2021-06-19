import React from 'react'
import styled from 'styled-components/macro'

import NavBar from '../components/NavBar'
import Title from '../components/Title'

const InfoPage = () => {

  return (
    <Main>
      <NavBar />
      <ContentContainer>
        <Title text='Info' />
        <Article>
          <InfoHeading>
          Wafer danish jelly beans.
          </InfoHeading>
          <InfoText>
            Sweet roll gummies soufflé jelly-o cotton candy cake. Pudding fruitcake pudding dessert chocolate cake jujubes sweet roll marshmallow powder. Wafer bear claw sesame snaps lemon drops gummies.  Dragée lemon drops pie. Candy canes pie croissant jelly-o oat cake marzipan.
          </InfoText>
          <InfoHeading>
          Croissant caramels pie.
          </InfoHeading>
          <InfoText>
          Gingerbread chocolate cake tootsie roll candy pie sweet roll sweet roll. Cheesecake brownie macaroon. Jelly biscuit carrot cake brownie donut apple pie cupcake danish. Sugar plum powder lemon drops gummi bears sweet chocolate bar gummi bears candy. 
          </InfoText>
          <InfoHeading>
          Cake bonbon topping pudding.
          </InfoHeading>
          <InfoText>
          Dessert sweet roll cheesecake dessert lollipop cupcake biscuit pastry gummi bears. Macaroon cookie dessert sweet cake. Dragée tiramisu chocolate cake cake tiramisu pastry jelly beans cupcake. Cupcake tiramisu candy cookie jelly beans lemon drops.
          </InfoText>
        </Article>
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
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`
const Article = styled.article`
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;
  width: 80vw;
    @media (min-width: 1025px) {
      width: 50vw;
    }
`
const InfoHeading = styled.h2`
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  margin-bottom: 5px;
    @media (min-width: 768px) {
      font-size: 18px;
    }
`
const InfoText = styled.p`
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  margin-bottom: 20px;
`