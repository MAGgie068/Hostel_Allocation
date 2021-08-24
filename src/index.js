import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/app';

// firebase.initializeApp({
//   apiKey: "AIzaSyBK2txt1xZOIRF0ggqgYa7e0394CyTQ1NM",
//   authDomain: "hostel-allocation-ffb5c.firebaseapp.com",
//   projectId: "hostel-allocation-ffb5c",
//   storageBucket: "hostel-allocation-ffb5c.appspot.com",
//   messagingSenderId: "422337507636",
//   appId: "1:422337507636:web:a598eaf0b1b021ef27b561",
//   measurementId: "G-N18F5HBCS0"
// });

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);


