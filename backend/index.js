require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { sequelize } = require("./database/sequelize");

const corsOptions = {
  credentials: true,
};

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const tokenRouter = require("./routes/tokenRoutes");
app.use("/api/token", tokenRouter);

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

const notificationRouter = require("./routes/notificationRoutes");
app.use("/api/notification", notificationRouter);

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/datetime", (req, res) => {
  res.send(new Date());
});

sequelize.sync().then(() => {
  console.log("Connected to db");
  app.listen(process.env.PORT, () => {
    console.log(`App started on port ${process.env.PORT}`);
  });
});
