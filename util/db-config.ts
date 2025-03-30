import { MongoClient } from "mongodb";
import config from '../envconfig'
const client = new MongoClient(config.db_uri as string);
export const connectToDB = async () => {
  try {

    await client.connect();
    console.log(`Connecting to Sidra Honey Shop database... 🍯🍯🐝🐝`);
  } catch (err) {
    console.log("Error occured when connecting to DB: " + err);
  }
};

export const db1 = client.db("Sidra-Shop");
export const db2 = client.db("Sidra-Admin-DB");

