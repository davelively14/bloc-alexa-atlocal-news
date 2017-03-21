"use strict";

var Https = require("https");
var jsdom = require("jsdom").jsdom;

// TODO: Remove this
var constants = require("./constants");

var getLinks = function (url) {
  var domain = "https://www.youtube.com";

  Https.get(url, function (resp) {
    let body = "";
    resp.
    setEncoding("utf8")
    .on("data", function(chunk) {
      body += chunk;
    })
    .on("end", function() {
      let doc = jsdom(body);
      console.log(domain + doc.getElementsByClassName("pl-video-title-link")[0].href);
    });
  });
};

// TODO: Remove this. Testing purposes only
getLinks(constants.stations.Fox5);

module.exports = getLinks;
