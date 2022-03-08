import { data, fetchAllData } from './scripts'

const usernameInput = document.querySelector('#usernameInput')
const userPassword = document.querySelector('#userPassword')
const loginValidation = document.querySelector('#loginValidation')
const loginSubmit = document.querySelector('#loginSubmit')
const loginView = document.querySelector('#loginView')

let currentUserID = null

const validateLogIn = (e, username, password) => {
  e.preventDefault()

  if (password.value === 'travel') {
    loginValidation.innerText = 'Log in successful!'
    currentUserID = parseInt(username.value.match(/\d+/g))
    console.log(currentUserID)
    setTimeout(() => {
      loginView.classList.add('hidden')
    }, 1500)
    fetchAllData()
  } else {
    console.log('hi')
    loginValidation.innerText = 'Log in unsuccessful, please check your password!'
  }
}

export { currentUserID, validateLogIn, loginSubmit, usernameInput, userPassword }
