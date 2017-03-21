"use strict";
var Alexa = require("alexa-sdk");
var constants = require("./constants");
// var fido = require("./fido");

exports.handler = function(event, context, _callback) {
  var alexa = Alexa.handler(event, context);
  alexa.APP_ID = constants.appId;
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {
  "LaunchRequest": function() {
    this.emit("GetHeadline");
  },
  "GetNewHeadlineIntent": function() {
    this.emit("GetHeadline");
  },
  "GetHeadline": function() {
    this.emit(":tell", "This is the test");
  }
};
