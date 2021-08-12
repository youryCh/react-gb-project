import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import React from 'react';
import firebase from 'firebase';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      isSignUp: false
    };

    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  setEmail(event) {
    this.setState({email: event.target.value});
  }

  setPassword(event) {
    this.setState({password: event.target.value});
  }

  handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
    } catch (error) {
      this.setState({error: error.message});
    }
  }

  handleSignUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
    } catch (error) {
      this.setState({error: error.message});
    }
  }

  handleClick = async () => {
   if (!this.state.email || !this.state.password) {
     this.setState({error: 'Please, enter email and password'});
     return;
   }

   if (this.state.isSignUp) {
     this.handleSignUp();
     return;
   }

   this.handleLogin();
  }

  isSignUpChange = () => {
    this.setState({isSignUp: !this.state.isSignUp});
  }

  render() {
    return (
      <React.Fragment>
        <h3>Login page</h3>
        <form className="loginForm">
          <FormControlLabel
            control={
              <Checkbox
                color="default"
                checked={ this.state.isSignUp }
                onChange={ this.isSignUpChange }
              />
            }
            label={ <span>Create account</span> }
          />
          <TextField
            type="email"
            placeholder="email"
            value={ this.state.email }
            onChange={ this.setEmail }
          />
          <TextField
            type="password"
            placeholder="password"
            value={ this.state.password }
            onChange={ this.setPassword }
          />
          <Button
            variant="outlined"
            size="small"
            onClick={ this.handleClick }
          >
            { this.state.isSignUp ? 'Sign up' : 'Login' }
          </Button>
        </form>
        <span className="flex-center">{ this.state.error }</span>
      </React.Fragment>
    );
  };
}
