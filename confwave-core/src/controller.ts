/* eslint-disable @typescript-eslint/no-explicit-any*/
import {Response} from "express";
import {db} from "./config/firebase";

type MessageType = {
  email: string,
  message: string,
};

type Request = {
  body: MessageType,
};

export const addMessage = async (req: Request, res: Response): Promise<void> => {
  console.info("Checking entries size... ");
  const entries = await fetchAllEntries();
  if (entries.length > 500) {
    console.warn("Too many entries now.");
    res.status(204).json("The machine is full. Try again another time.");
  }
  console.info("Adding message " + JSON.stringify(req.body));
  const {email, message} = req.body;
  if (!(email && message)) {
    res.status(204).json("Try again with some content");
  }
  try {
    const entry = db.collection("messages").doc();
    const entryObject = {
      email,
      message,
    };
    entry.set(entryObject).then((r) => {
      console.info("Message added " + r);
      res.status(200).send({
        status: "success",
        message: "message added",
        data: entryObject,
      });
    }).catch((error) => {
      res.status(500).json(error.message);
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const fetchAllEntries = async (): Promise<MessageType[]> => {
  const allEntries: MessageType[] = [];
  const querySnapshot = await db.collection("messages").get();
  querySnapshot.forEach((doc: any) => allEntries.push(doc.data()));
  return allEntries;
};

export const getMessages = async (req: Request, res: Response): Promise<Response> => {
  try {
    const allEntries = await fetchAllEntries();
    return res.status(200).json(allEntries);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
