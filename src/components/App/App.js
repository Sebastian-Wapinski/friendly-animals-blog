import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from '../../pages/HomePage'
import AnimalsPage from '../../pages/AnimalsPage'
import AnimalTypePage from '../../pages/AnimalTypePage'
import CurrentAnimalPage from '../../pages/CurrentAnimalPage'
import ResetStyle from '../style/Reset'

import { StyledApp } from './App.styled'

const App = () => {
  return (
    <>
      <ResetStyle />
      <StyledApp>
        <Routes>
          <Route
            path={'/'}
            element={<HomePage />}
          >
            <Route
              path={'/animals'}
              element={<AnimalsPage />}
            >
              <Route
                path={'/animals/:animalType'}
                element={<AnimalTypePage />}
              />
            </Route>
          </Route>
          <Route
            path={'/animals/:animalType/:currentAnimal'}
            element={<CurrentAnimalPage />}
          />
        </Routes>
      </StyledApp>
    </>
  )
}

export default App
