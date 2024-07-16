import express from "express";
import { authRouter } from "./routes/auth.mjs";
import cors from "cors";
import profiles from "./utils/dbtest.mjs";




const app = express();
const port = 4000;

app.use(cors());

app.use(express.json());
app.use("/auth", authRouter);

app.get('/profiles', (req, res) => {
  res.json(profiles);
});

app.get("/test", (req, res) => {
  return res.json("Server API is working");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
