import React, { Component } from 'react';
import { Text, KeyboardAvoidingView} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth'
import { Button, Card, CardSection, Input, Spinner ,Header} from './common';

class LoginForm extends Component {
  state = { 
    email: '', 
    password: '', 
    error: '', 
    loading: false ,
    TextInputValue: '',
    emailError : true,
    emailRegError:true,
    passwordError:true,
    passwordRegError:true
  };

  

  

  onButtonPress() {
    const { email, password ,TextInputValue} = this.state;
    this.setState({ error: '', loading: true });

     //Invalid Email using regex
     const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if (regEmail.test(this.state.email) === true){
      this.setState({email : email, emailRegError : true}) 
     }else{
      this.setState({email : email, emailRegError : false}) ;
    }
    //Invalid password using regex
    const regPass = /^.{6,12}$/;
    if (regPass.test(this.state.password) === true){
      this.setState({password : password, passwordRegError : true}) 
     }else{
      this.setState({password : password, passwordRegError : false}) ;
    }
    
   
 
    //Input form email is empty
    if(email.trim() != 0){
      this.setState({email : email, emailError : true}) ;
    }else{
        this.setState({email : email, emailError : false}) ;
    }
    if(password.trim() != 0){
      this.setState({password : password, passwordError : true}) ;
    }else{
        this.setState({password : password, passwordError : false}) ;
    }
   
    //Wrong email or password
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      // .catch(() => {
      //   firebase.auth().createUserWithEmailAndPassword(email, password)
      //     .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      // });

     

  }

  

  onLoginFail() {
    this.setState({ error: '*Password text does not satisfy the conditions above.', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
    alert('login success');
  }

  renderButton() {
    // const { email,password }  = this.state ;
    
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
  //   //Input form email empty
  //   if (email == "" ){
  //     Alert.alert("Input form is empty lease enter text to the field to proceed");
  //  }
  //  //Input form password empty
  //  if (password == "" ){
  //   Alert.alert("Input form is empty lease enter text to the field to proceed");
  //   }  

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Sign in
      </Button>
    );
    //Text Entry
    
    
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
            onChangeText={email  => this.setState({ email  })}
            
          />
        </CardSection>


        {/* text entry error */}
        { this.state.emailError == false ? (
             <Text style={styles.errorTextStyle} > 
               * Email field is empty
             </Text>
            ) : null  }

         {/* Email reg error entry error */}
         { this.state.emailRegError == false ? (
             <Text style={styles.errorTextStyle} > 
               * not correct format for email address
             </Text>
            ) : null  }


        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password})}
            
          />
        </CardSection>
         {/* // Text Entry Error  */}
          { this.state.passwordError == false ? (
             <Text style={styles.errorTextStyle} > 
               * Password field is empty
             </Text>
            ) : null  }

          {/* Password reg error entry error */}
         { this.state.passwordRegError == false ? (
             <Text style={styles.errorTextStyle} > 
               * please use at least 6 - 12 characters
             </Text>
            ) : null  }



            {/* handling firebase auth error */}
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
    alignSelf: 'flex-start',
    color: 'red'
  }
};

export default LoginForm;