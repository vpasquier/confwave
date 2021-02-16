// Google Functions
import functions = require("firebase-functions");
import express = require("express");
// Express
import {Request, Response} from "express";
// Import firestore controller
import {addMessage} from "./controller";

const app = express();

// APIs for support
app.post("/support/message", addMessage);
// app.get("/support/messages", getMessages);

// APIs for testing hello world
app.get("/hello", (req: Request, resp: Response) => {
  resp.send("Hello World");
});

// Create "main" function to host all other top-level functions
const main = express();
main.use("/api", app);
exports.main = functions.https.onRequest(main);
