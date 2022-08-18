import express from "express";
import routes from "./routes";
import logger from "./utils/logger";
import config from "./config/default";
import initMiddleware from "./middleware";
import dbConnect from "./utils/dbConnect";

const app = express();
const PORT = config.port;

initMiddleware(app);
app.listen(PORT, async () => {
  logger.info(`App is running at localhost:${PORT}`);

  await dbConnect();

  routes(app);
});
