import React, { useEffect } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'

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
          dispatch(cards.actions.setCards(data));
          dispatch(cards.actions.setErrors(null));
          console.log()
        })
    })
    .catch((error) => dispatch(cards.actions.setErrors(error.message)))
  }
  }

  return (
    <>
      {cardList.map((card) => (
        <Card
          {...card}
          key={card.id}
        />
      ))}
    </>
  )
}

export default CardList