function authentication(req, res, next) {
  if (req.body.name == "sahara") {
    next();
  } else {
    const error = new Error("name does not match");

    next(error);
  }
}

module.exports = authentication;
