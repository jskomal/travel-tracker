const travellerTestData = [
  {
    id: 1,
    name: 'Jordan Skomal',
    travelerType: 'relaxer'
  },
  {
    id: 2,
    name: 'Taylor Davis',
    travelerType: 'thrill-seeker'
  },
  {
    id: 3,
    name: 'John Savino',
    travelerType: 'foodie'
  }
]

const destinationTestData = {}
const tripsTestData = {
    "id": 1,
    "userID": 44,
    "destinationID": 49,
    "travelers": 1,
    "date": "2022/09/16",
    "duration": 8,
    "status": "approved",
    "suggestedActivities": []
  },
  {
    "id": 2,
    "userID": 35,
    "destinationID": 25,
    "travelers": 5,
    "date": "2022/10/04",
    "duration": 18,
    "status": "approved",
    "suggestedActivities": []
  }, {
    "id": 3,
    "userID": 3,
    "destinationID": 22,
    "travelers": 4,
    "date": "2022/05/22",
    "duration": 17,
    "status": "approved",
    "suggestedActivities": []
  }

export { travellerTestData, tripsTestData, destinationTestData }
