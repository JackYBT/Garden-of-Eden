import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { random } from "mathjs";
import { MongoClient } from "mongodb";
//import {Math} from 'math';
let DATABASE_NAME = "garden_of_eden_db";

let client = null;
let database = null;
let Journal = null;
let Photo = null;

/* Do not modify or remove this line. It allows us to change the database for grading */
if (process.env.DATABASE_NAME) DATABASE_NAME = process.env.DATABASE_NAME;

const api = express.Router();

const initAPI = async app => {
  app.set("json spaces", 2);
  app.use("/api", api);

  //Initialize database connection
  const uri = "mongodb://localhost";

  client = await MongoClient.connect(uri);
  database = client.db(DATABASE_NAME);
  Journal = database.collection("journal");
  Photo = database.collection("photos");
  };

api.use(bodyParser.json());
api.use(cors());

api.get("/", (req, res) => {
  //res.json("{ db:  }");
  res.json({ db: DATABASE_NAME });
});

//TODO: Add endpoints

/**
 * Function: api.get("/text")
 * Usage: Returns a random text within the journal databse to the user in JSON format
 */

api.get("/journal", async(req,res) => {
  let journal = await Journal.find().toArray();
  let randomIndex = getRandomInt(journal.length);
  let finalText = journal[randomIndex].text;
  res.json({finalText});
  return finalText;
});

/**
 * Function: getRandomInt
 * @param {int} max 
 * @returns a random integer that has a lower bound of 0 and the upper bound of max - 1
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/**
 * Function: api.post("/journal")
 * Usage: Takes in an input text from the user and adds it to the backend database
 */
api.post("/journal", async(req,res) => {
  let text = req.body.text;
  console.log(text);
  if (!text) {
    res.status(400).json({error: `You didn't input your journal entry`});
    return;
  }
  await Journal.insertOne({text: text, time: new Date()});
  res.json({success: true});
  return {"success": true};
})

/**
 * Function: api.get("/picture")
 * Usage: Returns a random photoURL from the database to the user's request
 */

api.get("/picture", async(req,res) => {
  let picture = await Photo.find().toArray();
  console.log("Length" + picture.length);
  let randomIndex = getRandomInt(picture.length);
  let photoURL = picture[randomIndex].photoURL;
  console.log("randomIndex" + randomIndex);
  res.json({photoURL});
  return photoURL;
});

/**
 * Function: api.post("/picture")
 * Usage: Takes in an input pictureURL from the user and adds it to the backend database
 */
 api.post("/picture", async(req,res) => {
  let photoURL = req.body.photoURL;
  if (!photoURL) {
    res.status(400).json({error: `You didn't input your pictureURL`});
    return;
  }
  await Photo.insertOne({photoURL: photoURL, time: new Date()});
  res.json({success: true});
  return {"success": true};
})

/* Catch-all route to return a JSON error if endpoint not defined */
api.all("/*", (req, res) => {
  res.status(404).json({ error: `Not found: ${req.method} ${req.url}` });
});

export default initAPI;
