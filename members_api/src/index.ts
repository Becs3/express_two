import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import router from "./routes/memberRoutes.js";

const app = express();
const PORT = 3000;

// Connect to Database before starting the server
connectDB();

// Middleware
app.use(cors({ origin: "http://localhost:5176" })); // Allow frontend access
app.use(express.json());

// Routes
app.use("/members", router);

app.get("/", (req, res) => {
    res.json({ message: "Server is running" });
});

// Start Server (Only ONE `app.listen`)
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});