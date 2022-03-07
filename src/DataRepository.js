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
      return `You've spent $${parseFloat((sum * 1.1).toFixed(2))} on trips this year`
    }
  }

  getTrips(userID, filterTerm) {
    if (filterTerm === 'all') {
      const userTrips = this.trips.filter((trip) => trip.userID === userID)
      return userTrips
    } else if (filterTerm === 'present') {
      const userTrips =
        this.trips.filter((trip) => trip.userID === userID) &&
        trip.date.isSame(dayjs('1 / 1 / 2022'), 'year') &&
        trip.status === 'approved'
      return userTrips
    } else if (filterTerm === 'upcoming') {
      this.trips.filter((trip) => trip.userID === userID) &&
        trip.date.isAfter(dayjs()) &&
        trip.status === 'approved'
    } else if (filterTerm === 'past') {
      this.trips.filter((trip) => trip.userID === userID) &&
        trip.date.isBefore(dayjs()) &&
        trip.status === 'approved'
    } else if (filterTerm === 'pending') {
      const userTrips =
        this.trips.filter((trip) => trip.userID === userID) && trip.status !== 'approved'
      return userTrips
    }
  }
}

export { DataRepository }
