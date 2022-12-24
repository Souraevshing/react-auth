import React from 'react'
import ReactDOM from 'react-dom'
import * as firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import './index.css'
import { App, serviceWorker } from './app'

import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
firebase.analytics()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
