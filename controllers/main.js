const { badRequestError, unAuthenticatedError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new badRequestError("Please provide a username and password");
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  // res.send("Fake Login/Register/SignUp Route");
  res.status(StatusCodes.OK).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new unAuthenticatedError("No token provided");
  }

  const token = authHeader.split(" ")[1];

  const lucky = Math.floor(Math.random() * 100);
  res.status(StatusCodes.OK).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${lucky}`,
  });
};

module.exports = {
  login,
  dashboard,
};
