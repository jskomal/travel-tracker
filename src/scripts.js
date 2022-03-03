import './css/styles.css'

import './images/paper-plane.svg'
import './images/arrow.svg'
import './images/plane-bw.svg'
import './images/plane-clr.svg'
import './images/earth-blk.svg'
import './images/earth-wht.svg'
import './images/island.svg'
import './images/paper-plane-clr.svg'

import { Traveler } from './Traveler'
import { Trip } from './Trip'
import { Destination } from './Destination'

import { fetchData } from './apiCalls'

// query selectors

// globals
const data = {}

//functions
const fetchAllData = () => {
  Promise.all([
    fetchData('travelers'),
    fetchData('trips'),
    fetchData('destinations')
  ]).then((data) => parseData(data))
}

const parseData = (fetchedData) => {
  data.travelers = []
  data.trips = []
  data.destinations = []
  fetchedData[0].travelers.forEach((traveler) => {
    data.travelers.push(new Traveler(traveler))
  })
  fetchedData[1].trips.forEach((trip) => data.trips.push(new Trip(trip)))
  fetchedData[2].destinations.forEach((destination) =>
    data.destinations.push(new Destination(destination))
  )
  console.log(data)
}

// event listeners
window.addEventListener('load', fetchAllData)
