import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import aiRoutes from "./routes/ai-routes.js";
import userRoutes from "./routes/userRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 5000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    credentials: true,
  })
);


app.use("/api/users", userRoutes);
app.use("/api/ai", aiRoutes);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../Frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../../Frontend/dist/index.html")
    );
  });
}

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
