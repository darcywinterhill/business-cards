import React, { useEffect } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'
import styled from 'styled-components/macro'

import { API } from '../reusables/urls'

import cards from '../reducers/cards'

import Card from '../components/Card'

const CardList = () => {
  const cardList = useSelector(store => store.cards.data)

  const dispatch = useDispatch()

    useEffect(() => {
    dispatch(fetchCards())
  }, [dispatch])

  const fetchCards = () => {
    return(dispatch) => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        batch(() => {
          dispatch(cards.actions.setCards(data))
          dispatch(cards.actions.setErrors(null))
        })
    })
    .catch((error) => dispatch(cards.actions.setErrors(error.message)))
  }
  }

  return (
    <CardWrapper>
      {cardList.map((card) => (
        <Card
          {...card}
          key={card.id}
        />
      ))}
    </CardWrapper>
  )
}

export default CardList

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0 25px 25px 25px;
`