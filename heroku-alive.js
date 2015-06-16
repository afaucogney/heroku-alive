/**
 * Created by anthonyfaucogney on 05/02/2015.
 */

var http = require('http');

exports.startKeepAlive = function startKeepAlive(minuteDelay, hostName, hostPort) {
  setInterval(function() {
    var options = {
      host: hostName,
      port: hostPort,
      path: '/'
    };
    http.get(options, function(res) {
      res.on('data', function(chunk) {
        try {
          // optional logging... disable after it's working
          //  console.log("HEROKU RESPONSE: " + chunk);
          // console.log("KeepAlive");
        } catch (err) {
          console.log(err.message);
        }
      });
    }).on('error', function(err) {
      console.log("Error: " + err.message);
    });
  }, minuteDelay  * 60 * 1000); // load every 20 minutes
};



