import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from '../../pages/HomePage'
import AnimalsPage from '../../pages/AnimalsPage'
import AnimalTypePage from '../../pages/AnimalTypePage'
import CurrentAnimalPage from '../../pages/CurrentAnimalPage'
import ResetStyle from '../style/Reset'

import { StyledApp } from './App.styled'
import PageNotFound from '../../pages/PageNotFound/PageNotFound'
import FilteredAllData from '../../pages/FilteredAllData/FilteredAllData'
import FilteredTypeData from '../../pages/FilteredTypeData/FilteredTypeData'

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
              path={'/all-animals/:pageNum'}
              element={<AnimalsPage />}
            />
            <Route
              path={'/:animalType/:animalPageNum'}
              element={<AnimalTypePage />}
            />
            <Route
              path={'/all-animals/:pageNum/:startDate/:endDate'}
              element={<FilteredAllData />}
            />
            <Route
              path={'/:animalType/:animalPageNum/:startDate/:endDate'}
              element={<FilteredTypeData />}
            />
          </Route>
          <Route
            path={'/animal/:uid/:currentAnimal'}
            element={<CurrentAnimalPage />}
          />
          <Route
            path={'*'}
            element={<PageNotFound />}
          />
        </Routes>
      </StyledApp>
    </>
  )
}

export default App
