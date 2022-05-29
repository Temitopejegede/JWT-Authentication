const CustomAPIError = require("./custom-error");

class unAuthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

module.exports = unAuthenticatedError;