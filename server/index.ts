import express, { Express, Request, Response, Application } from "express";
const cors = require("cors");
const fs = require("fs");
const morgan = require("morgan");

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use((req: Request, res: Response, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

fs.readdirSync("./router").forEach((file: string) => {
  const fileScaped = file.split(".")[0];
  app.use(`/${fileScaped}`, require(`./router/${fileScaped}`));
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
