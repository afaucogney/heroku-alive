# heroku-alive
NodeJs module that keep alive Heroku Free Dyno by requesting cyclic http request to itself.


# Usage
Just require the module and call the unique method.

# Example

```javascript
var herokuAlive = require("heroku-alive").startKeepAlive();
```
