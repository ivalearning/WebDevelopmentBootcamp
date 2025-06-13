import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("short")); // https://www.npmjs.com/package/morgan

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
