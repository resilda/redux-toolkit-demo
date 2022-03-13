import React, { useState } from 'react'
import {
  addNewCharacter,
  charactersListSelector,
} from './state/slices/characters'
import CharactersList from './components/CharactersList'
import CharacterDetails from './components/CharacterDetails'
import './App.css'
import { useAppDispatch, useAppSelector } from './state/hooks'
import { characterDetailsSelector } from './state/slices/characterDetails'

function App() {
  const [characterNameInput, setCharacterNameInput] = useState('')
  const charactersList = useAppSelector(charactersListSelector)
  const characterDetails = useAppSelector(characterDetailsSelector)
  const dispatch = useAppDispatch()

  function handleNewCharacters() {
    dispatch(addNewCharacter(characterNameInput))
  }

  return (
    <div className="App">
      <div className="container">
        <div className="characters-list-container">
          <div>
            <h5 className="characters-list-header">Star Wars Characters</h5>
            <div className="characters-cards-container">
              {charactersList.map((name: string, index: number) => {
                return <CharactersList name={name} index={index} />
              })}
            </div>
          </div>
          <div className="characters-card-container">
            <input
              value={characterNameInput}
              onChange={(e) => {
                setCharacterNameInput(e.target.value)
              }}
              className="characters-list-input-container"
            />
            <button onClick={handleNewCharacters}>Add</button>
          </div>
        </div>
        <div className="characters-details-list-container">
          {characterDetails.map((detail: any) => {
            return (
              <CharacterDetails
                id={detail.id}
                name={detail.name}
                details={detail.food}
                key={detail.id}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
