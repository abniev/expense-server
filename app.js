import express from "express";
import morgan from "morgan";
import connectDB from "./config/mongoose.config.js";
import * as dotenv from "dotenv";
import categoryRouter from "./routes/categories.routes.js";
import cors from "cors";

dotenv.config();

const app = express();
const logger = morgan("dev");

// use Middleware
app.use(express.json());
app.use(logger);
app.use(cors({ origin: [process.env.REACT_APP_URI] }));

app.use("/", categoryRouter);

app.listen(process.env.PORT, () => {
  console.clear();
  console.log(process.env.REACT_APP_URL);
  console.log("Server 🏃🏽 on port:", process.env.PORT);
  connectDB();
});
