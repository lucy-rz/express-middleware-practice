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
//GET /todos/:id/edit
router.get("/:id/edit", todosCtrl.edit);
//POST /todos
router.post("/", todosCtrl.create);
// DELETE /todos/:id
router.delete("/:id", todosCtrl.delete);
// PUT /todos/:id
router.put("/:id", todosCtrl.update);

module.exports = router;
