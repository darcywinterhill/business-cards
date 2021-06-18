import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import FrontPage from './pages/FrontPage'
import DetailPage from './pages/DetailPage'

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
          <Route path='/card/:id' component={DetailPage}/>
        </Switch>
      </Provider>
    </BrowserRouter>
  )
}
