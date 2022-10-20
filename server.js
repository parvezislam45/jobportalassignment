const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");


const app = require("./app");

// database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`David Your Database connection is successful 🛢`.yellow.bold);
  });


// server run port
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.red.bold);
});