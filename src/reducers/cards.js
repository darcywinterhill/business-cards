import { createSlice } from '@reduxjs/toolkit'

const cards = createSlice({

  name: 'cards',
  initialState: {
    data: [],
    errors: null
  },
  reducers: {
    setCards: (store, action) => {
      store.data = action.payload
    },
    setErrors: (store, action) => {
      store.errors = action.payload
    }
  }
})

export default cards