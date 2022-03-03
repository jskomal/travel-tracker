import chai from 'chai'
const expect = chai.expect
import { travelerTestData } from './test-data'
import { Traveler } from '../src/Traveler'

describe("Traveler's Tests", () => {
  let traveler1
  let traveler2
  let traveler3

  beforeEach(() => {
    traveler1 = new Traveler(travelerTestData[0])
    traveler2 = new Traveler(travelerTestData[1])
    traveler3 = new Traveler(travelerTestData[2])
  })

  it('should be a function', () => {
    expect(Traveler).to.be.a('function')
  })

  it('should be an instantiation of the Traveler Class', () => {
    expect(traveler1).to.be.an.instanceof(Traveler)
    expect(traveler2).to.be.an.instanceof(Traveler)
    expect(traveler3).to.be.an.instanceof(Traveler)
  })

  it('should have an ID, name, and travelerType', () => {
    expect(traveler1.id).to.equal(1)
    expect(traveler1.name).to.equal('Jordan Skomal')
    expect(traveler1.travelerType).to.equal('relaxer')
  })

  it("should have a method to return the user's first name", () => {
    expect(traveler1.getFirstName()).to.equal('Jordan')
    expect(traveler2.getFirstName()).to.equal('Taylor')
    expect(traveler3.getFirstName()).to.equal('John')
  })
})
