const express = require(`express`);
const employeeRouter = require("./routes/employee");

const mongoose = require("mongoose");
const app = express();
// const cors = require("cors");
// connection our app to pur database(Mongodb atlas)

mongoose
  .connect(
    
  )
  .then(() => {
    console.log("DB connection is successful");
  })
  .catch((err) => {
    console.log(err);
  });

// connection our app to pur database(Mongodb atla
//Setting up our server
const PORT = 5000;
app.use(express.json());
// app.use(cors({ origin: "*" }));
app.use("/api/employee", employeeRouter);

app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT})`);
});
