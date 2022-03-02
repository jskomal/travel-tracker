import chai from 'chai'
const expect = chai.expect
import { tripsTestData } from './test-data'

describe('Trips Tests', () => {
  beforeEach(() => {
    trip1 = new Trip(tripsTestData[0])
    trip2 = new Trip(tripsTestData[1])
    trip3 = new Trip(tripsTestData[2])
  })

  it('should be a function', () => {
    expect(Trip).to.be.a('function')
  })

  it('should be an instantiation of the Trip class', () => {
    expect(trip1).to.be.an.instanceof(Trip)
    expect(trip2).to.be.an.instanceof(Trip)
    expect(trip3).to.be.an.instanceof(Trip)
  })

  it('should have an id, userID, destinationID, travelers, date, duration, status, and suggestedActivities', () => {
    expect(trip1.id).to.equal(1)
    expect(trip1.userID).to.equal(44)
    expect(trip1.destinationID).to.equal(49)
    expect(trip1.travelers).to.equal(1)
    expect(trip1.date).to.equal('2022/09/16')
    expect(trip1.duration).to.equal(8)
    expect(trip1.status).to.equal('approved')
    expect(trip1.suggestedActivites).to.deep.equal([])
  })
})
