class DataRepository {
  constructor(data) {
    this.travelers = data.travelers
    this.trips = data.trips
    this.destinations = data.destinations
  }
}

export { DataRepository }
