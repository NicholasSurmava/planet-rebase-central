// Custom Middleware example
//Simple request time logger
exports.requestDate = function (req, res, next) {
  console.log("A new request received at " + Date.now());

  //This function call is very important. It tells that more processing is
  //required for the current request and is in the next middleware
  //function/route handler.
  next();
};

exports.helloMiddleware = function (req, res, next) {
  console.log("hello from " + req.baseUrl + req.url);

  next();
};
