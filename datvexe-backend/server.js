const express = require('express');
var cors = require("cors");
var Fingerprint = require("express-fingerprint");
const path = require("path");

const app = express();
const port = 8000;

const { sequelize } = require("./models/index");
const { rootRouter } = require("./routers");

//Cài ứng dụng sử dụng kiểu json
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'token'],
};
app.use(cors(corsOptions));

// Middleware để phân tích JSON body
app.use(express.json());

//cài đặt fingerprint
app.use(Fingerprint());

// cài đặt static file
const publicPathDicrectory = path.join(__dirname, "./public");
app.use("/public", express.static(publicPathDicrectory));

// Routes
app.use("/api/v1", rootRouter);

//Lắng nghe sự kiện kết nối
app.listen(port, async () => {
  console.log("App listening on " + port);
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
