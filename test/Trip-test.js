import chai from 'chai'
const expect = chai.expect
import dayjs from 'dayjs'
import { tripTestData } from './test-data'
import { Trip } from '../src/Trip'

describe('Trips Tests', () => {
  let trip1
  let trip2
  let trip3

  beforeEach(() => {
    trip1 = new Trip(tripTestData[0])
    trip2 = new Trip(tripTestData[1])
    trip3 = new Trip(tripTestData[2])
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
    expect(trip1.userID).to.equal(1)
    expect(trip1.destinationID).to.equal(1)
    expect(trip1.travelers).to.equal(1)
    expect(trip1.date).to.deep.equal(dayjs('2022/09/16'))
    expect(trip1.duration).to.equal(8)
    expect(trip1.status).to.equal('approved')
    expect(trip1.suggestedActivities).to.deep.equal([])
  })
})
