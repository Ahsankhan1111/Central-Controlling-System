require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connection sucessfully");
  })
  .catch((err) => {
    console.log(err.message);
  });
app.listen(process.env.PORT, () => {
  console.log(`server started on port ${PORT}`);
});
