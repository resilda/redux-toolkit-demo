import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface CharacterProps {
  id: string
  name: string
  details: Array<string>
}

interface CharacterDetailsProps {
  id: string
  detail: string
}

export interface ICharacterDetails {
  characterDetails: CharacterProps[]
}

const initialState: ICharacterDetails = {
  characterDetails: [],
}

export const characterDetailsSlice = createSlice({
  name: 'character details',
  initialState,
  reducers: {
    addCharacterDetail: (state, action: PayloadAction<CharacterProps>) => {
      state.characterDetails.push(action.payload)
    },
    removeCharacterDetail: (
      state,
      action: PayloadAction<CharacterDetailsProps>,
    ) => {
      state.characterDetails.forEach((detail) => {
        if (detail.id === action.payload.id) {
          detail.details.push(action.payload.detail)
        }
      })
    },
  },
})

export const characterDetailsSelector = (state: RootState) =>
  state.characterDetailsSlice.characterDetails

export const {
  addCharacterDetail,
  removeCharacterDetail,
} = characterDetailsSlice.actions

export default characterDetailsSlice.reducer
