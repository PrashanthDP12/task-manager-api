// const express = require("express");
// require("./db/mongoose");
// const User = require("./models/user");
// const Task = require("./models/task");

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json());

// app.post("/users", async (req, res) => {
//   const user = new User(req.body);

//   try {
//     await user.save();
//     res.status(201).send(user);
//   } catch (e) {
//     res.status(400).send(e);
//   }
//   // user
//   //   .save()
//   //   .then(() => {
//   //     res.status(201).send(user);
//   //   })
//   //   .catch((e) => {
//   //     res.status(400).send(e);
//   //   });
// });

// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.send(users);
//   } catch (e) {
//     res.status(500).send();
//   }

//   // User.find({})
//   //   .then((users) => {
//   //     res.send(users);
//   //   })
//   //   .catch((e) => {
//   //     res.status(500).send();
//   //   });
// });

// app.get("/users/:id", async (req, res) => {
//   const _id = req.params.id;

//   try {
//     const user = await User.findById(_id);
//     if (!user) {
//       return res.status(404).send("User Not found");
//     }
//     res.send(user);
//   } catch (e) {
//     res.status(500).send();
//   }
//   // User.findById(_id)
//   //   .then((user) => {
//   //     if (!user) {
//   //       return res.status(404).send();
//   //     }

//   //     res.send(user);
//   //   })
//   //   .catch((e) => {
//   //     res.status(500).send();
//   //   });
// });

// app.post("/tasks", async (req, res) => {
//   const task = new Task(req.body);
//   try {
//     await task.save();
//     res.status(201).send(task);
//   } catch (e) {
//     res.status(400).send(e);
//   }
//   // task
//   //   .save()
//   //   .then(() => {
//   //     res.status(201).send(task);
//   //   })
//   //   .catch((e) => {
//   //     res.status(400).send(e);
//   //   });
// });

// app.get("/tasks", async (req, res) => {
//   try {
//     const tasks = await Task.find({});
//     res.send(tasks);
//   } catch (e) {
//     res.status(500).send();
//   }
//   // Task.find({})
//   //   .then((tasks) => {
//   //     res.send(tasks);
//   //   })
//   //   .catch((e) => {
//   //     res.status(500).send();
//   //   });
// });

// app.get("/tasks/:id", async (req, res) => {
//   const _id = req.params.id;
//   try {
//     const task = await Task.findById(_id);
//     if (!task) {
//       return res.status(404).send("Task Not found");
//     }
//     res.send(task);
//   } catch (e) {
//     res.status(500).send();
//   }
//   // Task.findById(_id)
//   //   .then((task) => {
//   //     if (!task) {
//   //       return res.status(404).send();
//   //     }

//   //     res.send(task);
//   //   })
//   //   .catch((e) => {
//   //     res.status(500).send();
//   //   });
// });

// app.listen(port, () => {
//   console.log("Server is up on port " + port);
// });

const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   res.status(503).send("Sorry folks, Maintenance break, Please try again")
//   console.log(req.method, req.path);
//   next()
// });


app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
