import dayjs from 'dayjs'

class DataRepository {
  constructor(data) {
    this.travelers = data.travelers
    this.trips = data.trips
    this.destinations = data.destinations
  }

  calcTotalCostThisYear(userID) {
    const userTrips = this.trips.filter((trip) => {
      return trip.userID === userID && trip.date.isSame(dayjs('1 / 1 / 2022'), 'year')
    })
    const sum = userTrips.reduce((acc, currentTrip) => {
      let currentDestination = this.destinations.find(
        (place) => place.id === currentTrip.destinationID
      )
      return (
        acc +
        currentTrip.duration * currentDestination.estimatedLodgingCostPerDay +
        currentDestination.estimatedFlightCostPerPerson * currentTrip.travelers * 2
      )
    }, 0)
    if (!sum) {
      return `No trips found this year!`
    } else {
      return parseFloat((sum * 1.1).toFixed(2))
    }
  }

  getTrips(filterTerm) {
    const userTrips = this.trips.filter((trip) => trip.userID === userID)
  }
}

export { DataRepository }
