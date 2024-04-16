import express from "express";
import ViteExpress from "vite-express";
import db, { db_url } from "./database.js";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import "dotenv/config";

import userRouter from "./routes/user-routes.js";
import postRouter from "./routes/post-routes.js";
import commentRouter from "./routes/comment-routes.js";

import serverless from "serverless-http"


const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "https://edureview.onrender.com/",
  headers: ["Content-Type"],
  credentials: true,
}));
app.use(cookieParser());

mongoose.connect(db_url);

app.use(userRouter)
app.use(postRouter)
app.use(commentRouter)

export const handler = serverless(app)

ViteExpress.listen(app, PORT, () =>
  console.log("Server is listening on port 3000...")
);
