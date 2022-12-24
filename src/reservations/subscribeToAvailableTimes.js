import firebase from 'firebase/app'

export const subscribeToAvailableTimes = (restaurantId, date, cb) => {
  const callback = (results) => {
    const dateAvailiabilityDoc = results.docs[0]
    if (dateAvailiabilityDoc) {
      cb({
        id: dateAvailiabilityDoc.id,
        availableTimes: dateAvailiabilityDoc.data().availableTimes,
      })
    } else {
      cb({ id: '', availableTimes: [] })
    }
  }

  return firebase
    .firestore()
    .collection('dateAvailabilities')
    .where('restaurantId', '==', restaurantId)
    .where('date', '==', date)
    .onSnapshot(callback)
}
