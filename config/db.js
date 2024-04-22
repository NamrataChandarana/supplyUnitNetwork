import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://dbuser:dbuser@cluster0.jt2j5vj.mongodb.net/sun?retryWrites=true&w=majority"
    );
    console.log(`Conneted To Mongodb Databse `.bgMagenta.white);
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
