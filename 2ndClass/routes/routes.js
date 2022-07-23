const router = require("express").Router();
const authentication = require("../middleware/auth");
const role = require("../middleware/role");

let user = [];
//  router example start

router.get("/", (req, res) => {
  // console.log(req.hostname);
  res.send("Hello World!");
});

router.get("/hello", (req, res) => {
  res.send("This is Hello page");
});
router.get("/user", (req, res) => {
  res.send(user);
});
router.get("/about/:ID", (req, res) => {
  console.log(req);
  res.send("This is about page");
});

// post method

router.post("/create", authentication, role, (req, res, next) => {
  let data = req.body;
  user.push(data);
  // res.send("name matched");
  res.end();
});
// router example end

module.exports = router;
