"use strict";

var Https = require("https");
var jsdom = require("jsdom").jsdom;

// TODO: Remove this
var constants = require("./constants");

/**
 * Given a url for a YouTube playlist, will pull links to up to 100 videos and
 * call the callback function, passing those links as an array.
 * @param  {string}   url      URL of YouTube playlist
 * @param  {Function} callback Callback function, will be passed the playlist
 */
var fido = function (url, callback) {
  let domain = "https://www.youtube.com";

  Https.get(url, function (resp) {
    let body = "";
    resp.
    setEncoding("utf8")
    .on("data", function(chunk) {
      body += chunk;
    })
    .on("end", function() {
      let doc = jsdom(body);
      let playlist = [];
      let pathList = doc.getElementsByClassName("pl-video-title-link");

      for (var i = 0; i < pathList.length; i++) {
        playlist.push(domain + pathList[i].href);
      }

      callback(playlist);
    });
  });
};

// TODO: Remove this. Testing purposes only
fido(constants.stations.Fox5, console.log);

module.exports = fido;
