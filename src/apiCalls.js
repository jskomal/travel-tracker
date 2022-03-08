import dayjs from 'dayjs'
import {
  currentUserID,
  destinationInput,
  travelersInput,
  calendarInput,
  durationInput
} from './domUpdates'

let tripIDcounter = 50

const fetchData = (path) => {
  return fetch(`http://localhost:3001/api/v1/${path}`)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

const postTrip = () => {
  return fetch('http://localhost:3001/api/v1/trips', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      id: tripIDcounter++,
      userID: currentUserID,
      destinationID: destinationInput.value,
      travelers: travelersInput.value,
      date: dayjs(calendarInput.value).format('YYYY/MM/DD'),
      duration: durationInput.value,
      status: 'pending',
      suggestedActivities: []
    }
  })
}

export { fetchData }
