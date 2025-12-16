import express from 'express';
const app = express();
import cors from 'cors';
import 'dotenv/config';
import aiRoutes from './routes/ai-routes.js';
import userRoutes from './routes/userRoutes.js';
import { connectDB } from './config/db.js';
import cookieParser from 'cookie-parser';
const PORT=process.env.PORT||5000
import path from "path";


app.use(express.json());
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);
app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/api/ai', aiRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../frontend", "dist", "index.html")
    );
  });
}

console.log("Server file loaded");
console.log("PORT:", process.env.PORT);
console.log("NODE_ENV:", process.env.NODE_ENV);


connectDB();

app.listen(PORT, () => {
    console.log('Server is running on port 5000');
})

