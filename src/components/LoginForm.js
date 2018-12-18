import React, { Component } from 'react';
import { Text, Alert} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth'
import { Button, Card, CardSection, Input, Spinner ,Header} from './common';

class LoginForm extends Component {
  state = { email: '',
           password: '', 
           error: '', 
           loading: false,
           
          };

  onButtonPress() {
    const { email, password } = this.state;
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regPass = /^.{6,12}$/;
    this.setState({ error: '', loading: true });
    // if (email === '' ||
    //  password === '' || 
    //  regEmail.test(this.state.email) === false || 
    //  regPass.test(this.state.password) === false
    //  ) {
    //   this.setState({ loading: false });
    //   Alert.alert(
    //     'Message',
    //     'Error',
    //     [
    //       { text: 'ok', onPress: () => null }
    //     ]
    //   );
    // }else{
    //   firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(this.onLoginSuccess.bind(this))
    //   .catch(() => {
    //     firebase.auth().createUserWithEmailAndPassword(email, password)
    //       .then(this.onLoginSuccess.bind(this))
    //       .catch(this.onLoginFail.bind(this));
    //   });
    // }
    if (email === '' || password === ''){
      this.setState({ loading: false});
      Alert.alert(
        'Message',
        'Input field empty',
        [
          
          { text: 'ok', onPress: () => null }
        ]
        );
    }else if(regEmail.test(this.state.email) === false ){
      this.setState({ loading: false });
      Alert.alert(
        'Message',
        'Email text is not email form.',
        [
          { text: 'ok', onPress: () => null }
        ]
        );
        

    }else if(regPass.test(this.state.password) === false){
      this.setState({ loading: false });
      Alert.alert(
        'Message',
        'Password length must be 6-12 characters',
        [
          { text: 'ok', onPress: () => null }
        ]
        );
    }
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
     
  
  }

  onLoginFail() {
    this.setState({ error: 'Password text does not satisfy the conditions above.', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
    Alert.alert(
      'Message',
      'Login Success',
      [
        { text: 'ok', onPress: () => null }
      ]
      );
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button  d onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Header/>
        </CardSection>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
     alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;