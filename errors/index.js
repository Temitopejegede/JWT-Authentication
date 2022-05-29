const CustomAPIError = require("./custom-error");
const badRequestError = require("./badRequest");
const unAuthenticatedError = require("./unAuthenticated");

module.exports = { customAPIError, badRequestError, unAuthenticatedError };
