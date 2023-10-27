const mongoose = require("mongoose");
const validator = require("validator");
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Email is invalid");
//       }
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 7,
//     trim: true,
//     validate(value) {
//       if (value.toLowerCase().includes("password")) {
//         throw new Error('Password cannot contain "password"');
//       }
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("Age must be a postive number");
//       }
//     },
//   },
// });

// // const user = new User({
// //   name: "Prashanth",
// //   age: 27,
// //   email: "1296prashanth@gmail.com",
// //   password: "Apple@123",
// // });

// // user
// //   .save()
// //   .then((user) => {
// //     console.log(user);
// //   })
// //   .catch((error) => {
// //     console.log("Error!", error);
// //   });

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
// });

// // const task1 = new Task({ description: "Learn to Dance", completed: false });
// // task1
// //   .save()
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });
