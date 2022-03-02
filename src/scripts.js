import './css/styles.css'

import './images/paper-plane.svg'
import './images/arrow.svg'
import './images/plane-bw.svg'
import './images/plane-clr.svg'
import './images/earth-blk.svg'
import './images/earth-wht.svg'
import './images/island.svg'
import './images/paper-plane-clr.svg'

import Traveller from './Traveler'

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
  fetchedData[0].forEach((traveller) => {
    data.travelers.push(new Traveller(traveller))
  })
}

// event listeners
window.addEventListener('load', fetchAllData)
