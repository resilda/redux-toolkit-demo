import { configureStore } from '@reduxjs/toolkit'
import characterDetailsSlice from './slices/characterDetails'
import charactersListSlice from './slices/characters'

export const store = configureStore({
  reducer: {
    charactersListSlice,
    characterDetailsSlice,
  },
})

/**
 * The last value returned by the store's reducer.
 * @returns { RootState } - current state tree of your application
 */
export type RootState = ReturnType<typeof store.getState>

// Expanding original store object with new dispatch property.
export type AppDispatch = typeof store.dispatch
