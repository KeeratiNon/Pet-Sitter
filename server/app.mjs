import express from "express"
import dotenv from "dotenv"
import { authRouter } from "./routes/auth.mjs";
import cors from "cors"

const app = express();
const port = 4000;

app.use(cors())

app.use(express.json());
app.use("/auth", authRouter)


app.get("/test", (req,res) => {
    return res.json("Server API is working")
})

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})