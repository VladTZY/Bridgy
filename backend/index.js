require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const { sequelize } = require("./database/sequelize");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userRouter = require("./routes/userRoutes");
app.use("/api/user", userRouter);

app.get("/ping", (req, res) => {
  res.send("pong");
});

sequelize.sync().then(() => {
  console.log("Connected to db");
  app.listen(process.env.PORT, () => {
    console.log(`App started on port ${process.env.PORT}`);
  });
});
