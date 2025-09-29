import express from "express";
import cors from "cors";

const app = express();

import eventRoutes from "./routes/eventRoutes.js";

//origin takes string, array of string but not object
app.use(
  cors({
    origin: "https://meet-up-kp9d.vercel.app",
  })
);
app.use(express.json());

app.use("/events", eventRoutes);

export default app;
