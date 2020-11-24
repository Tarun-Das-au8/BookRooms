import React, { Component } from "react";
import "../styles/Register.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Link } from "react-router-dom";

firebase.initializeApp({
  apiKey: "AIzaSyBZ8BRLIsFPleNI3Aye6o8DCKaoHFDNbyQ",
  authDomain: "login-e2fc2.firebaseapp.com",
});

class Login extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  render() {
    return (
      <div className="signin">
        {this.state.isSignedIn ? (
          <span className="container3">
            <h4 className="back">Signed In Succesfully!</h4>

            <h1 className="back">
              Welcome {firebase.auth().currentUser.displayName}
            </h1>

            <img
              alt="profilepic"
              src={firebase.auth().currentUser.photoURL}
              className="profile"
            />
            <Link to="/rooms" className="btn1">
              go to Rooms
            </Link>
            <br />
            <button onClick={() => firebase.auth().signOut()}>Sign out</button>
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default Login;
