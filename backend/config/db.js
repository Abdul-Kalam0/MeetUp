import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbInitialization = async () => {
  await mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("Database is connected"))
    .catch((error) => console.error("Database is not connected", error));
};

export default dbInitialization;
