require("../src/db/mongoose");
const User = require("../src/models/user");

User.findByIdAndUpdate("653b51e144efbab7ddafea87", { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log("count : ", result);
  })
  .catch((e) => {
    console.log("Error : ", e);
  });
