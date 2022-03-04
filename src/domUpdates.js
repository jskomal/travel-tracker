import { data } from './scripts'

let currentUserID
// query selectors
const userName = document.querySelector('#userName')

// functions

const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length)
}

const selectRandomUserID = () => {
  currentUserID = getRandomIndex(data.travelers)
  console.log(currentUserID)
}

const updateName = () => {
  userName.innerText = `Welcome, ${data.travelers[currentUserID - 1].getFirstName()}`
}

const updateDisplay = () => {
  updateName()
  updateTripView()
}

export { getRandomIndex, selectRandomUserID, updateDisplay }
