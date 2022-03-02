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

  it('should be an instantiation of the Trip class')
})
