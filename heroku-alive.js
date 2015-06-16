/**
 * Created by anthonyfaucogney on 05/02/2015.
 */

var http = require('http');

exports.startKeepAlive = function startKeepAlive() {
  setInterval(function() {
    var options = {
      host: 'vinkipedia.herokuapp.com',
      port: 80,
      path: '/'
    };
    http.get(options, function(res) {
      res.on('data', function(chunk) {
        try {
          // optional logging... disable after it's working
          //console.log("HEROKU RESPONSE: " + chunk);
          console.log("KeepAlive");
        } catch (err) {
          console.log(err.message);
        }
      });
    }).on('error', function(err) {
      console.log("Error: " + err.message);
    });
  }, 20  * 60 * 1000); // load every 20 minutes
};



