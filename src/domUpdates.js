import dayjs from 'dayjs'
import { data } from './scripts'
import { postTrip } from './apiCalls'
import { currentUserID } from './login'

// query selectors
const userName = document.querySelector('#userName')
const tripView = document.querySelector('#tripView')

// buttons
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
const successMessage = document.querySelector('#successMessage')

// functions

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
  const currentDestination = data.destinations.find((place) => {
    return place.id == destinationInput.value
  })
  const sum =
    (parseInt(currentDestination.estimatedLodgingCostPerDay) *
      parseInt(durationInput.value) +
      parseInt(currentDestination.estimatedFlightCostPerPerson) * 2) *
    parseInt(travelersInput.value)
  if (!sum) {
    estimatedCost.innerText = 'Please fill out all fields to see your estimated cost!'
  } else {
    estimatedCost.innerText = `Your estimated cost is $${parseFloat(
      (sum * 1.1).toFixed(2)
    )}`
  }
}

const submitTrip = (e) => {
  e.preventDefault()
  postTrip()
}

export {
  updateDisplay,
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
  userName,
  successMessage
}
