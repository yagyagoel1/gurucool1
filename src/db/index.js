import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { logger } from "../index.js";

const connectDB = async () => {
  try {
    if(process.env.TEST)
      {
        DB_NAME="test"
      }
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected DB HOST : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    logger.error("monogodb connection failed", error);
    process.exit(1);
  }
};
export default connectDB;