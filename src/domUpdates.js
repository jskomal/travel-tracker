import { data } from './scripts'

// query selectors

// functions

const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length)
}

const selectRandomUserID = () => {
  return getRandomIndex(data.travelers)
}

export { getRandomIndex, selectRandomUserID }
