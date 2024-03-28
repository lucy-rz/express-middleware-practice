const Todo = require("../models/todo");

module.exports = {
    index,
    show, 
    new: newTodo,
    create,
    delete: deleteToDo
};

function deleteToDo(req, res) {
    console.log("delete ToDo")
    console.log(req.params.id)
    Todo.deleteOne(req.params.id);
    res.redirect("/todos");
};

function create(req, res) {
    
    console.log(req.body);
    //models are responsible for CRUD'ing the data
    Todo.create(req.body);
    // Always redirect when data has been changed
    res.redirect("/todos");
};

function newTodo(req, res) {
    res.render("todos/new", { title: "New Todo" });
}

function show(req, res) {
    console.log("show")
    res.render("todos/show", {
        todo: Todo.getOne(req.params.id),
        title: "To-Do Details"
    });
}

function index(req, res) {
    res.render('todos/index', {
      todos: Todo.getAll(),
      title: "All To-Dos"
    });
  }