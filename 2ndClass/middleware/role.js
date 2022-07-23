function role(req, res, next) {
  if (req.body.role == "admin") {
    next();
  } else {
    next(new Error("Invalid role"));
  }
}
module.exports = role;
