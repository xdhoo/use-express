import mongoose from "mongoose";
import config from "../config/default";
import logger from "./logger";

async function dbConnect() {
  const dbUri = config.dbUri;
  const dbUser = config.dbUser;
  const dbPassword = config.dbPassword;
  const dbAuthSource = config.dbAuthSource;

  try {
    const options = {
      user: dbUser,
      pass: dbPassword,
      auth: dbAuthSource,
    };
    const connection = await mongoose.connect(dbUri);
    logger.info("DB connected");
    return connection;
  } catch (error) {
    logger.error("Could not connect to db");
    process.exit(1);
  }
}

export default dbConnect;
