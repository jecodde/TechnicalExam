import React, { Component } from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth'
import { Button, Card, CardSection, Input, Spinner ,Header} from './common';

class LoginForm extends Component {
 
    state = {
      email: '',
      password:'',
      errorEmail: '',
      errorPassword:'',
      disabledButton:false,
      error:''
    }
    onButtonPress() {
      const { email, password } = this.state;
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
    // if (email === '' || password === ''){
    //   this.setState({ loading: false});
    //   Alert.alert(
    //     'Message',
    //     'Input field empty',
    //     [
          
    //       { text: 'ok', onPress: () => null }
    //     ]
    //     );
    // }else if(regEmail.test(this.state.email) === false ){
    //   this.setState({ loading: false });
    //   Alert.alert(
    //     'Message',
    //     'Email text is not email form.',
    //     [
    //       { text: 'ok', onPress: () => null }
    //     ]
    //     );
        

    // }else if(regPass.test(this.state.password) === false){
    //   this.setState({ loading: false });
    //   Alert.alert(
    //     'Message',
    //     'Password length must be 6-12 characters',
    //     [
    //       { text: 'ok', onPress: () => null }
    //     ]
    //     );
    // }
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

  validateEmail() {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    const{email} = this.state;
    if (email===0) {
      this.setState({
        loading: false,
        errorEmail: 'input field is empty',
        disabledButton: true,
      })
    }
    else if(!regexEmail.test(email)){
      this.setState({
        loading: false,
        errorEmail: 'not correct format for email address',
        disabledButton: true,
      })
    }
    else {
      this.setState({
        loading: false,
        errorEmail: '',
        disabledButton: false
      })
    }
  }

  validatePassword() {
    const {password} = this.state;
    regPass = /^.{5,11}$/;
   if(password===0){
    this.setState({
      loading: false,
      errorPassword: 'input field is empty',
      disabledButton: true,
    });
   }
   else if (!regPass.test(password)) {
      this.setState({
        loading: false,
        errorPassword: 'please use at least 6 - 12 characters',
        disabledButton: true,
      });
    }
    else {
      this.setState({
        loading: false,
        errorPassword: '',
        disabledButton: false,
      })
    }
  }

  
  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return this.state.disabledButton
        ?
        (<TouchableOpacity disabled={this.state.disabledButton}
          style={[styles.button, styles.buttonColor]}
           onPress={this.onButtonPress.bind(this)}
          >
          
          <Text style={styles.buttonText}>
            Sign In
          </Text>
        </TouchableOpacity>)
        :
        (<TouchableOpacity disabled={this.state.disabledButton}
          style={styles.button}
          onPress={this.onButtonPress.bind(this)}
          >
          <Text style={styles.buttonText}>
            Sign In
          </Text>
        </TouchableOpacity>);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Header/>
        </CardSection>
        <CardSection>
          <Input
            placeholder="Input email address"
            label="Email"
            onChangeText={(email)=>{this.setState({email})}}
            onChange={()=>{this.validateEmail()}}
          />
        </CardSection>
        <Text style={styles.errValStyle}>
                {this.state.errorEmail}
              </Text>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="input password"
            label="Password"
            onChangeText={(password)=>{this.setState({password})}}
            onChange={()=>{this.validatePassword()}}
           
          />
        </CardSection>
              <Text style={styles.errValStyle}>
              {this.state.errorPassword}
              </Text>
      
        <CardSection>
          {this.renderButton()}
        </CardSection> 
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
     alignSelf: 'center',
    color: 'red'
  },
  errValStyle:{
    color:'red'
  }
  , 
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#8366b2',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#8366b2',
    marginLeft: 5,
    marginRight: 5
  },
  buttonColor: {
    backgroundColor: '#ad99cc',
  },
   buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default LoginForm;