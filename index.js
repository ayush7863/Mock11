const express = require("express");
const { connection } = require("./db");
const { jobPostRouter } = require("./routes/posting.routes");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/post", jobPostRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected To DB");
    console.log("Server is Running on 8080 Port");
  } catch (error) {
    console.log("disconnected");
    console.log(error);
  }
});
