require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("653a38480050e20fdc7e56db")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("653b522a44efbab7ddafea89")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
