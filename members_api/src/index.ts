import express from "express"
import { connectDB } from "./config/db"
const app = express()
import router from "./routes/memberRoutes";

app.use(express.json())
app.use("/members", router)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})


connectDB();