const firebase = require('firebase')
require('firebase/firestore')

const {
  reservations,
  dateAvailabilities,
  restaurants,
  reviews,
} = require('./testData')

const firebaseConfig = {
  apiKey: 'AIzaSyD0Xb_jUKvvJC5_H7TMlaXIMgDqWl1qhfU',
  authDomain: 'restaurant-app-c293e.firebaseapp.com',
  projectId: 'restaurant-app-c293e',
  storageBucket: 'restaurant-app-c293e.appspot.com',
  messagingSenderId: '306204911389',
  appId: '1:306204911389:web:f5c153f3e45196afeb63f4',
  measurementId: 'G-4VW8MVJKL9',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

function populateCollection(collectionName, items) {
  return Promise.all(
    items.map((item) => {
      const { id, ...data } = item
      return db.collection(collectionName).doc('id').set(data)
    })
  )
}

Promise.all([
  populateCollection('reservations', reservations),
  populateCollection('reviews', reviews),
  populateCollection('restaurants', restaurants),
  populateCollection('dateAvailabilities', dateAvailabilities),
])
  .then(() => {
    console.log('Successfully populated')
    process.exit(0)
  })
  .catch((err) => {
    console.log('Error occurred!', err)
  })
