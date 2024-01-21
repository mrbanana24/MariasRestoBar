const mongoose = require("mongoose");

const connectDB = async () => {
  const dbUrl = "mongodb+srv://franperci:mansanita15@cluster0.zgx26g6.mongodb.net/";
  try {
    await mongoose.connect(dbUrl);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;
