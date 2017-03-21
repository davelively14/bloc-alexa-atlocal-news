"use strict";
var Alexa = require("alexa-sdk");
var APP_ID = "amzn1.ask.skill.0c8c8f3d-e08a-4a7c-8606-4cf338a389d0";

exports.handler = function(event, context, _callback) {
  var alexa = Alexa.handler(event, context);
  alexa.APP_ID = APP_ID;
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
    this.emit(":tell", "This is a test");
  }
};
