const mongoose = require("mongoose");

const connectDB = async () => {
  const dbUrl = "mongodb+srv://franpercivaldi:mansanita15@cluster0.gykusvl.mongodb.net/";
  try {
    await mongoose.connect(dbUrl);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;
