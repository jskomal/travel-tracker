import chai from 'chai'
const expect = chai.expect
import { DataRepository } from '../src/DataRepository'
import { travelerTestData, tripsTestData, destinationTestData } from './test-data'

import { Traveler } from '../src/Traveler'
import { Trip } from '../src/Trip'
import { Destination } from '../src/Destination'

describe('DataRepository Tests', () => {
  let travelerData
  let tripData
  let destinationData
  let dataRepositoryTestData
  let dataRepository

  beforeEach(() => {
    travelerData = travelerTestData.map((traveler) => new Traveler(traveler))
    tripData = tripTestData.map((trip) => new Trip(trip))
    destinationData = destinationTestData.map(
      (destination) => new Destination(destination)
    )
    dataRepositoryTestData = {
      travelers: travelerData,
      trips: tripData,
      destinations: destinationData
    }
    dataRepository = new DataRepository(dataRepositoryTestData)
  })

  it('should be a function', () => {
    expect(DataRepository).to.be.a('function')
  })

  it('should be an instantiation of the DataRepository class', () => {
    expect(dataRepository).to.be.an.instanceof(DataRepository)
  })

  it('should hold traveler data, trip data, and destination data', () => {
    expect(dataRepository.travelers).to.deep.equal(travelerData)
    expect(dataRepository.trips).to.deep.equal(tripData)
    expect(dataRepository.destinations).to.deep.equal(destinationData)
  })
})
