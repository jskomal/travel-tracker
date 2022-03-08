import dayjs from 'dayjs'
import { data } from './scripts'
import { postTrip } from './apiCalls'

let currentUserID

// query selectors
const userName = document.querySelector('#userName')
const tripView = document.querySelector('#tripView')

// buttons
const viewAllButton = document.querySelector('#viewAll')
const viewPresentButton = document.querySelector('#viewPresent')
const viewUpcomingButton = document.querySelector('#viewUpcoming')
const viewPastButton = document.querySelector('#viewPast')
const viewPendingButton = document.querySelector('#viewPending')
const filterButtons = document.querySelector('#filterButtons')

const purchases = document.querySelector('#purchases')

const bookTripButton = document.querySelector('#bookTrip')
const newBookingView = document.querySelector('#bookView')
const closeBookingView = document.querySelector('#closeBookingModal')

const destinationInput = document.querySelector('#destinations')
const travelersInput = document.querySelector('#travelers')
const calendarInput = document.querySelector('#startDate')
const durationInput = document.querySelector('#duration')
const bookSubmit = document.querySelector('#bookSubmit')

const estimatedCost = document.querySelector('#estimatedCost')

// functions
const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length)
}

const selectRandomUserID = () => {
  currentUserID = getRandomIndex(data.travelers) + 1
}

const updateName = () => {
  userName.innerText = `Welcome, ${data.travelers
    .find((person) => person.id === currentUserID)
    .getFirstName()}`
}

const updateTripView = (filterTerm) => {
  const currentTrips = data.getTrips(currentUserID, filterTerm || 'viewAll')
  let renderer = ''
  currentTrips.forEach((trip) => {
    let currentDestination = data.destinations.find(
      (place) => trip.destinationID === place.id
    )

    renderer += `
      <article class='trip-card'>
        <div class='image-header'>
          <img
            src=${currentDestination.image}
            alt=${currentDestination.alt}
          />
          <h3 class='destination-name-text'>${currentDestination.destination}</h3>
        </div>
        <section class='trip-info'>
          <h4>${trip.date.format('MMM D, YY')} to ${trip.date
      .add(trip.duration, 'days')
      .format('MMM D, YY')}</h4>
          <h4>${trip.travelers} travelers</h4>
          <h4>Suggested Activities: ${
            trip.suggestedActivites || 'Nothing to see here yet!'
          }</h4>
          <h4>Trip Status: ${trip.status}</h4>
        </section>
      </article>
    `
  })
  tripView.innerHTML = renderer
}

const updatePurchases = () => {
  purchases.innerText = data.calcTotalCostThisYear(currentUserID)
}

const updateDisplay = () => {
  updateName()
  updatePurchases()
  updateTripView()
}

const filterTrips = (e) => {
  e.preventDefault()
  updateTripView(e.target.id)
}

const toggleBookingView = () => {
  newBookingView.classList.toggle('hidden')
}

const updateEstimatedCost = () => {
  const currentDestination = data.destinations.find(
    (place) => place.id === destinationInput.value
  )
  const sum =
    currentDestination.estimatedLodgingCostPerDay * durationInput +
    currentDestination.estimatedFlightCostPerPerson * 2
  estimatedCost.innerText = parseFloat((sum * 1.1).toFixed(2))
}

const submitTrip = (e) => {
  e.preventDefault()
  postTrip()
}

export {
  getRandomIndex,
  selectRandomUserID,
  updateDisplay,
  currentUserID,
  filterButtons,
  filterTrips,
  toggleBookingView,
  bookTripButton,
  closeBookingView,
  destinationInput,
  travelersInput,
  calendarInput,
  durationInput,
  estimatedCost,
  bookSubmit,
  updateEstimatedCost,
  submitTrip,
  userName
}
