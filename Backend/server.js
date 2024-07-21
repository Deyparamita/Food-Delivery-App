import express from "express";
import cors from "cors";
import { connectToDb } from "./config/db.js";
import foodRouter from "./routers/foodRoute.js";
import userRouter from "./routers/userRoute.js";
import "dotenv/config.js";
import cartRouter from "./routers/cartRoute.js";
import orderRouter from "./routers/orderRoute.js";

//  app config
const app = express();
const port = process.env.PORT || 4000;

//  middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API working");
});

//  Database connection
connectToDb();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
