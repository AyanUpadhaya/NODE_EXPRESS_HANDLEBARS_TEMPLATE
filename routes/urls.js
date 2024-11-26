const router = require("express").Router();
const {
  aboutView,
  homeView,
  notFound,
} = require("../controllers/viewControllers");

router.get("/",homeView)
router.get("/about", aboutView);
router.get("*", notFound);

module.exports = router;

