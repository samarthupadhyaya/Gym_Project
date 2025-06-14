const express = require("express");
const cors = require("cors");
const app = express();
const corsOptions = {
  origin: "*",
  methods: "*",
  allowedHeaders: ["Content-Type", "*"],
};
app.use(cors(corsOptions));
require("./http/seeders/AdminSeeder");
require("dotenv").config();
const mongoose = require("mongoose");
const api_routes = require("./routes/user");
const authroutes = require("./routes/auth");
const adminMiddleware = require("./http/middlewares/admin.middleware");
const authMiddleware = require("./http/middlewares/auth.middleware");
app.use(express.json());
app.use("/api/auth", authroutes);
app.use("/api/admin", authMiddleware, adminMiddleware, api_routes);

mongoose
  .connect(process.env.MONGOURI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`mongodb connection error:${error}`);
  });
