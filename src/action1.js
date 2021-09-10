"use strict";
let datafire = require('datafire');

let personio_de_authentication = require('@datafire/personio_de_authentication').actions;
module.exports = new datafire.Action({
  id: "action1",
  inputs: [{
    type: "string",
    title: "input1"
  }],
  handler: async (input, context) => {
    let request_Authentication_Token_response = await personio_de_authentication.auth.post({}, context);
    return request_Authentication_Token_response;
  },
});
