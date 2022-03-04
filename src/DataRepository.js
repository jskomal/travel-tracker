class DataRepository {
  constructor(data) {
    this.travelers = data.travelers
    this.trips = data.trips
    this.destinations = data.destinations
  }

  calcTotalCost(userID) {
    const userTrips = this.trips.filter((trip) => trip.userID === userID)
    const sum = userTrips.reduce((acc, currentTrip) => {
      let currentDestination = this.destinations.find(
        (place) => place.id === currentTrip.destinationID
      )
      return (
        acc +
        currentTrip.duration * currentDestination.estimatedLodgingCostPerDay +
        currentDestination.estimatedFlightCostPerPerson * currentTrip.travelers
      )
    }, 0)
    return sum
  }
}

export { DataRepository }
