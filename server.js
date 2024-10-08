import express from "express";
import path from "path";
import cluster from "cluster";
import os from "os";
import fs from "fs";
import http from "http";
import { Socket, Server } from "socket.io";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { error, success, warning } from "./src/constants/chalk.js";
import { getCurrentRunningEnvironment } from "./src/utils/basic.js";

dotenv.config({
  path: "./configs/environments.env",
});

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.set("trust proxy", true);

app.use(
  express.json({
    limit: "50mb",
  })
);

app.use(
  express.urlencoded({ extended: false, limit: "50mb", parameterLimit: 50000 })
);

app.use(morgan("dev"));

const PORT = process.env.PORT || 8081;
const appName = process.env.APP_NAME;

const server = http.createServer(app);

const bootstrap = () => {
  try {
    server.listen(PORT, (err) => {
      if (err) {
        console.log(`Error while starting ${appName} server: `, err);
      } else {
        console.log(
          success(
            `${appName} server is listening on PORT: ${PORT} - Server ID: ${
              process.pid
            } - ${getCurrentRunningEnvironment()}`
          )
        );
      }
    });
  } catch (error) {
    console.log(error(error));
  }
};

bootstrap();
