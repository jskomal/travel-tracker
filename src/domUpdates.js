import { data } from './scripts'

let currentUserID
// query selectors
const userName = document.querySelector('#userName')
const tripView = document.querySelector('#tripView')

// functions

const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length)
}

const selectRandomUserID = () => {
  currentUserID = getRandomIndex(data.travelers)
}

const updateName = () => {
  userName.innerText = `Welcome, ${data.travelers[currentUserID - 1].getFirstName()}`
}

const updateTripView = () => {
  const renderer = ''

  tripView.innerHTML = renderer
}

const updateDisplay = () => {
  updateName()
  updateTripView()
}

export { getRandomIndex, selectRandomUserID, updateDisplay, currentUserID }
