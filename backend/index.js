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

const eventRouter = require("./routes/eventRoutes");
app.use("/api/events", eventRouter);

const studentRouter = require("./routes/studentRoutes");
app.use("/api/student", studentRouter);

const schoolRouter = require("./routes/schoolRoutes");
app.use("/api/school", schoolRouter);

const organizationRouter = require("./routes/organizationRoutes");
app.use("/api/organization", organizationRouter);

const adminRouter = require("./routes/adminRoutes");
app.use("/api/admin", adminRouter);

const superAdminRouter = require("./routes/superAdminRoutes");
app.use("/api/super_admin", superAdminRouter);

app.get("/ping", (req, res) => {
  res.send("pong");
});

sequelize.sync().then(() => {
  console.log("Connected to db");
  app.listen(process.env.PORT, () => {
    console.log(`App started on port ${process.env.PORT}`);
  });
});
