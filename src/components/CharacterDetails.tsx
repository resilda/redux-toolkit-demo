import React, { useState } from 'react'
import { useAppDispatch } from '../state/hooks'
import { addCharacterDetail } from '../state/slices/characterDetails'

interface CharacterDetailsProps {
  id: string
  name: string
  details: Array<string>
}

function CharacterDetails({ id, name, details }: CharacterDetailsProps) {
  const [characterDetailInput, setCharacterDetailInput] = useState('')
  const dispatch = useAppDispatch()
  return (
    <div className="characters-detail-card-container">
      <h5>{name}</h5>
      <div className="character-details-container">
        <div className="character-detail">
          {details.map((detail) => {
            return <p>{detail}</p>
          })}
        </div>
        <div className="character-details-input-container">
          <input
            value={characterDetailInput}
            onChange={(e) => setCharacterDetailInput(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch(
                addCharacterDetail({
                  id,
                  name,
                  details: [characterDetailInput],
                }),
              )
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default CharacterDetails
