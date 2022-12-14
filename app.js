const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const cors = require("cors");
const usersRouter = require("./src/routes/users.routes");
const productRouter = require("./src/routes/product.routes");
const orderRouter = require("./src/routes/order.routes");
const categoryRouter = require("./src/routes/categories.router");
const teleservicesRouter = require("./src/routes/teleservices.routes");
const teleproductRouter = require("./src/routes/teleproduct.routes");
const mongoose = require("mongoose");
const { sendMail } = require("./src/utils/sendMail");
const app = express();

app.use(cors());
app.options("*", cors());
app.use(morgan("tiny"));
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));
app.use("/users", usersRouter);
app.use("/products", productRouter);
app.use("/order", orderRouter);
app.use("/categories", categoryRouter);
app.use("/tele-services", teleservicesRouter);
app.use("/tele-product", teleproductRouter);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const URI = process.env.URI;

// const html = <div>Xin chfo</div>

mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to mongodb");
  }
);
// module.exports = app;
