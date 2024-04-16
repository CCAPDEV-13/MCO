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
  methods: ["GET", "POST", "PUT", "DELETE", "UPDATE", "PATCH"],
  allowedHeaders: [
    "Origin",
    "Content-Type",
    "Accept",
    "Authorization",
    "X-Request-With"
  ]
}));
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   res.header("Access-Control-Allow-credentials", true);
//   // res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE, PATCH");
//   next();
// })
app.use(cookieParser());

mongoose.connect(db_url);

app.use(userRouter)
app.use(postRouter)
app.use(commentRouter)

export const handler = serverless(app)

ViteExpress.listen(app, PORT, () =>
  console.log("Server is listening on port 3000...")
);
