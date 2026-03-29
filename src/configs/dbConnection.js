import mongoose from "mongoose";
import { env } from "process";

export const connectDB = async () => {
  try {
    let mongoURI = process.env.MONGO_DB_URI;

    console.log(`Current Node Environment: ${process.env.NODE_ENV}`);
    console.log(`Connecting to MongoDB at URI: ${mongoURI}`);

    const conn = await mongoose.connect(mongoURI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};
