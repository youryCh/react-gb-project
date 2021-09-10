import React from 'react';
import datafire from '../action2';

// let datafire = require('./actions/action2');


export class Auth extends React.Component {
  render() {
    const authData = async () => await datafire.handler()
      .then(response => console.log(response))
      .catch(err => console.error(err));
    console.log(authData);

    return (
      <p>This is Auth component</p>
    );
  }
}
