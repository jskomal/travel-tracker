import chai from 'chai'
const expect = chai.expect
import { travellerTestData } from './test-data'

describe("Traveler's Tests", () => {
  beforeEach(() => {
    traveller1 = new Traveler(travellerTestData[0])
    traveller2 = new Traveler(travellerTestData[1])
    traveller3 = new Traveler(travellerTestData[2])
  })

  it('should be a function', () => {
    expect(Traveler).to.be.a('function')
  })

  it('should be an instantiation of the Traveler Class', () => {
    expect(traveller1).to.be.an.instanceof(Traveler)
    expect(traveller2).to.be.an.instanceof(Traveler)
    expect(traveller3).to.be.an.instanceof(Traveler)
  })

  it('should have an ID, name, and travellerType', () => {
    expect(traveller1.id).to.equal(1)
    expect(traveller1.name).to.equal('Jordan Skomal')
    expect(traveller1.travellerType).to.equal('relaxer')
  })

  it("should have a method to return the user's first name", () => {
    expect(traveller1.getFirstName()).to.equal('Jordan')
    expect(traveller2.getFirstName()).to.equal('Taylor')
    expect(traveller3.getFirstName()).to.equal('John')
  })
})
