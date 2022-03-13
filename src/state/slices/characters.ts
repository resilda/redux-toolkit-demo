import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface CharactersInitalState {
  charactersList: Array<string>
}

const initialState: CharactersInitalState = {
  charactersList: [],
}

export const charactersListSlice = createSlice({
  name: 'characters',
  initialState,
  // will hold all the actions for a specific piece of state
  reducers: {
    /**
     * @action - @type {PayloadAction<string>} - Expected a string value to be included into the array.
     */
    addNewCharacter: (state, action: PayloadAction<string>) => {
      state.charactersList.push(action.payload)
    },
    /**
     * @type {PayloadAction<string>} - Expected a number (index) to remove a character from the list.
     *  */
    removeCharacter: (state, action: PayloadAction<number>) => {
      state.charactersList.splice(action.payload, 1)
    },
  },
})

export const charactersListSelector = (state: RootState) =>
  state.charactersListSlice.charactersList

// Methods used in the application components', in order to update the state (modifies the reducer).
export const { addNewCharacter, removeCharacter } = charactersListSlice.actions

// manages an individual data slice.
export default charactersListSlice.reducer
