var express = require('express');
var router = express.Router();
var todosCtrl = require("../controllers/todos")

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//GET /todos
router.get("/", todosCtrl.index);
// GET /todos/new <-- define before show route
router.get("/new", todosCtrl.new);
//GET /todos/:id
router.get("/:id", todosCtrl.show);
module.exports = router;
