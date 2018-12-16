/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Text, View} from 'react-native';
import firebase from '@firebase/app';
import {Header} from './src/components/common';
import LoginForm from './src/components/LoginForm'




 class App extends Component {
// initializeFirebase() {
//   const firebase = require("firebase");

//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCqxLHIXuvnOoLct0ehN0-renat3cqexIk",
//     authDomain: "authentication-304f2.firebaseapp.com",
//     databaseURL: "https://authentication-304f2.firebaseio.com",
//     projectId: "authentication-304f2",
//     storageBucket: "authentication-304f2.appspot.com",
//     messagingSenderId: "926587905674"
//   };
//   firebase.initializeApp(config);

//   //inicializando o firestore
//   const firestore = require("firebase/firestore");
//   db = firebase.firestore();
//   db.settings({ timestampsInSnapshots: true });
// }


 componentWillMount() {

  firebase.initializeApp({
    apiKey: 'AIzaSyCqxLHIXuvnOoLct0ehN0-renat3cqexIk',
    authDomain: 'authentication-304f2.firebaseapp.com',
    databaseURL: 'https://authentication-304f2.firebaseio.com',
    projectId: 'authentication-304f2',
    storageBucket: 'authentication-304f2.appspot.com',
    messagingSenderId: '926587905674'
  });

 }

  render() {
    return (
      <View>
        <Header headerText={'Welcome'}/>
        <LoginForm/>
      </View>
    );
  }
}

export default App;