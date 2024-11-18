const { connect } = require("mongoose");

const connectDB = async () => {
  const conn = await connect(process.env.MONGO_URI);
  if (process.env.NODE_ENV === "dev") {
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  }
};

module.exports = connectDB;
