import React, { Component } from 'react';
import firebase from 'firebase';
import { StyledFirebaseAuth } from 'react-firebaseui';

firebase.initializeApp({
  apiKey: "AIzaSyBK2txt1xZOIRF0ggqgYa7e0394CyTQ1NM",
  authDomain: "hostel-allocation-ffb5c.firebaseapp.com"
})

class App extends Component {
  state = { isSignedIn: false }

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn: !!user})
      console.log('user', user)
    })
  }

  render(){
    return (
      <div>
        {this.state.isSignedIn ? (
          <div>
            hogya
            <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img src={firebase.auth().currentUser.photoURL} alt='profile picture'></img>
          </div>
        ) : (
          <div>
            <h1 className="loginhead">Hostel Memories</h1>
            <h2 className="loginbase">Please Sign-In</h2>
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()} />
          </div>
        )}
      </div>
    )
  }
}

export default App;
