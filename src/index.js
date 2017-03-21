var Alexa = require("alexa.sdk");
var APP_ID = undefined;

exports.handler = function(event, context, _callback) {
  var alexa = Alexa.handler(event, context);
  alexa.APP_ID = APP_ID;
  alexa.registerHandlers(handlers);
};

var handlers = {
  "LaunchRequest": function() {
    this.emit("GetHeadline");
  },
  "GetNewHeadlineIntent": function() {
    this.emit("GetHeadline");
  },
  "GetHeadline": function() {
    
  }
};
