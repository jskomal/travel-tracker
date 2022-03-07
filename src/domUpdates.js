import { data } from './scripts'
import dayjs from 'dayjs'

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

const updateTripView = (filterTerm) => {
  const currentTrips = data.getTrips(currentUserID - 1, filterTerm || 'all')
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
  purchases.innerText = data.calcTotalCostThisYear(currentUserID - 1)
}

const updateDisplay = () => {
  updateName()
  updatePurchases()
  updateTripView()
}

export { getRandomIndex, selectRandomUserID, updateDisplay, currentUserID }
