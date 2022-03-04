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
import { DataRepository } from './DataRepository'

import { fetchData } from './apiCalls'

import dayjs from 'dayjs'

// query selectors

// globals
let data = {}

//functions
const fetchAllData = () => {
  Promise.all([
    fetchData('travelers'),
    fetchData('trips'),
    fetchData('destinations')
  ]).then((data) => parseData(data))
}

const parseData = (fetchedData) => {
  const dataRepository = {}
  dataRepository.travelers = fetchedData[0].travelers.map(
    (traveler) => new Traveler(traveler)
  )
  dataRepository.trips = fetchedData[1].trips.map((trip) => new Trip(trip))
  dataRepository.destinations = fetchedData[2].destinations.map(
    (destination) => new Destination(destination)
  )
  data = new DataRepository(dataRepository)
  console.log(data)
  console.log(data.calcTotalCost(1))
}

// event listeners
window.addEventListener('load', fetchAllData)

export { data }
