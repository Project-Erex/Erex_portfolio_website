import mongoose from "mongoose";
import {DB_URL} from ".";

const connection = {};

async function DbConnect() {
  if (connection.isConnected) {
    console.log("connected");
    return;
  }

  try {
    const mongoURL = DB_URL;
    const db = await mongoose.connect(mongoURL);
    connection.isConnected = db.connections[0].readyState;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);

    process.exit(1);
  }
}

export default DbConnect;
