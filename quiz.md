(1) What will the name of the router module be? (include its parent directory)
routes/cats.js

(2) Write the line of code within server.js that would require the above router and assign it to a variable named catsRouter.
const catsRouter = require("./routes/cats);

(3) Write the line of code within server.js that would mount the above router object prefixing the proper path of /cats.
app.use("/cats", catsRouter);

For the following questions, assume a cats controller assigned to a variable named catsCtrl within routes/cats.js - write the following code within routes/cats.js:

(4) Write the line of code that defines the proper route that would read/display all cats (cats index route).
router.get("/", catsCtrl.index);

(5) Write the line of code that defines the proper route that would read/display a single cat (cats show route).
router.get("/:id", catsCtrl.show);

(6) Write the line of code that defines the proper route that would display a view that includes a form for submitting a new cat (cats new route).
router.get("/new", catsCtrl.new);

(7) Write the line of code that defines the proper route that would handle the cat form being submitted and creates a new cat in the database (cats create route).
router.post("/", catsCtrl.create);