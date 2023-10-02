const dotenv = require("dotenv");
const connectDatabase = require("../db/connection");
const { BookSchema } = require("../model/models");
dotenv.config({ path: "./config/config.env" });
connectDatabase();
const data = require("../data/books.json");
const seedData = async () => {
  try {
    await BookSchema.insertMany(data);
  } catch (err) {
    console.log(err);
    process.exit();
  }
};
seedData();
