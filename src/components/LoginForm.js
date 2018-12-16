
import React, { Component } from 'react'
import { Text } from 'react-native';
import firebase from '@firebase/app'
import '@firebase/auth'
import {Button,Card,CardSection,Input,Spinner} from './common'


 class LoginForm extends Component {

    state = {
        email:'',
        password:'',
        loading:false,
        error:''
    };

    onButtonPress(){
        const {email,password} =this.state;

        this.setState({err:'',loading:true});

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this ))
            })
    }
 
    onLoginFail(){
        this.setState({error:'Authentication Failed',loading:false})
    }

    onLoginSuccess(){
        this.setState({
            email:'',
            password:'',
            loading:false,
            err:''
        });
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner size="small" />
        }

        return(
            <Button onPress={this.onButtonPress.bind(this)}/>
        );
    }

  render() {
    return (
        <Card>
            {/* Email Input */}
            <CardSection>
                <Input 
                placeholder='user@gmail.com'
                label ='email'
                value={this.state.email}
                onChangeText={text=> this.setState({email: text})}
                />
            </CardSection>
          {/* Password Input */}
            <CardSection>
                <Input 
                    secureTextEntry
                    placeholder='password'
                    label ='Password'
                    value={this.state.password}
                    onChangeText={text=> this.setState({password: text})}
                />
            </CardSection>

            <Text style={styles.errorTextStyle}>
                {this.state.error}
            </Text>

            <CardSection>
                {this.renderButton()}
            </CardSection>
        </Card>


    
    )
  }
}

const styles={
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
}

export default LoginForm;
