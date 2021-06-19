import React from 'react'
import styled from 'styled-components/macro'

import NavBar from '../components/NavBar'
import Title from '../components/Title'

const FrontPage = () => {

  return (
    <Main>
      <NavBar />
      <ContentContainer>
        <Title text='Hello world!' />
        <lottie-player
          src='https://assets3.lottiefiles.com/packages/lf20_0T1oLM.json' 
          background='transparent' 
          speed='1'
          style={{
            width: '300px',
            height: '300px'
          }}
          loop
          autoplay
        >
        </lottie-player>
      </ContentContainer>
    </Main>
  )
}

export default FrontPage

const Main = styled.main`
  position: relative;
  min-height: 100vh;
  background-color: #e7efee;
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`