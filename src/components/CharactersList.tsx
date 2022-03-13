import React from 'react'
import { useDispatch } from 'react-redux'
import { addCharacterDetail } from '../state/slices/characterDetails'
import { removeCharacter } from '../state/slices/characters'
import { v4 as uuid } from 'uuid'

interface CharacterProps {
  name: string
  index: number
}

function CharactersList({ name, index }: CharacterProps) {
  const dispatch = useDispatch()
  return (
    <div
      className="characters-card-container"
      onClick={() => {
        dispatch(removeCharacter(index))
        dispatch(
          addCharacterDetail({
            id: uuid(),
            name,
            details: [],
          }),
        )
      }}
    >
      <p>{name}</p>
    </div>
  )
}

export default CharactersList
