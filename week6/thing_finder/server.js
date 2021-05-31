const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));
app.use("/things", require("./thingRouter"));

app.use((err, req, res, next) => {
  console.log(err);
});

app.listen(4000, () => {
  console.log("Server Success: localhost:4000");
});