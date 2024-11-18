require("dotenv/config");
const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema.js");
const connectDB = require("./config/db.js");

const port = process.env.PORT || 3030;
const app = express();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({ schema, graphiql: process.env.NODE_ENV === "dev" })
);

app.get("/", (req, res) => {
  res.json({ message: "welcome to the API" });
});

app.listen(port, () => {
  connectDB();
  console.log(`Server running on port: ${port}`);
});
