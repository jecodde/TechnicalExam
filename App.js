/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View,KeyboardAvoidingView,ScrollView } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth'
import {Header,Button,Spinner} from './src/components/common';
import LoginForm from './src/components/LoginForm'




class App extends Component  {
  state = { loggedIn: null };
  

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCqxLHIXuvnOoLct0ehN0-renat3cqexIk',
      authDomain: 'authentication-304f2.firebaseapp.com',
      databaseURL: 'https://authentication-304f2.firebaseio.com',
      projectId: 'authentication-304f2',
      storageBucket: 'authentication-304f2.appspot.com',
      messagingSenderId: '926587905674'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    // switch (this.state.loggedIn) {
    //   case true:
    //     return (
    //       <Button onPress={() => firebase.auth().signOut()}>
    //         Log Out
    //       </Button>
    //     );
    //   case false:
    //     return <LoginForm />;
    //   default:
    //     return <Spinner size="large" />;
    // }
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Sign out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <ScrollView>
      <KeyboardAvoidingView   style = {{ flex: 1 }}  keyboardVerticalOffset = {Header.HEIGHT + 50} behavior="padding" enabled>
     
        {/* <Header headerText="Authentication" /> */}
        {this.renderContent()}
  
      </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

export default App;