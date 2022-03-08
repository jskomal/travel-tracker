import dayjs from 'dayjs'
import { data } from './scripts'
import {
  currentUserID,
  destinationInput,
  travelersInput,
  calendarInput,
  durationInput
} from './domUpdates'

const fetchData = (path) => {
  return fetch(`http://localhost:3001/api/v1/${path}`)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

const postTrip = () => {
  const newTripData = {
    id: data.trips.length + 1,
    userID: parseInt(currentUserID),
    destinationID: parseInt(destinationInput.value),
    travelers: parseInt(travelersInput.value),
    date: dayjs(calendarInput.value).format('YYYY/MM/DD'),
    duration: parseInt(durationInput.value),
    status: 'pending',
    suggestedActivities: []
  }
  return fetch('http://localhost:3001/api/v1/trips', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTripData)
  }).then((response) => {
    if (!response.ok) {
      console.log(newTripData)
      throw new Error('Failed to book a new trip')
    } else {
      console.log('SUCCESS')
      response.json().then((data) => console.log(data))
    }
  })
}

export { fetchData, postTrip }
