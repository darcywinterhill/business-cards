import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import FrontPage from './pages/FrontPage'
import CardPage from './pages/CardPage'

import cards from './reducers/cards'

const reducer = combineReducers({
  cards: cards.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route path='/' exact component={FrontPage}/>
          <Route path='/cards' component={CardPage}/>
        </Switch>
      </Provider>
    </BrowserRouter>
  )
}
