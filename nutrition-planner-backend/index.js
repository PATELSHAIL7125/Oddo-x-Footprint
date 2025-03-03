import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mealRoutes from "./routes/mealRoutes.js"; // Import meal routes

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Use routes
app.use("/api/meals", mealRoutes);  // Correct API prefix

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
