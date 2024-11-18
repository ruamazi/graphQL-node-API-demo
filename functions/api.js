require("dotenv/config");
const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
// const connectDB = require("../config/db.js");
// const { graphqlHTTP } = require("express-graphql");
// const schema = require("../schema/schema.js");

const port = process.env.PORT || 3030;
const app = express();
app.use(cors());
const router = express.Router();

// router.use(
//   "/graphql",
//   graphqlHTTP({ schema, graphiql: process.env.NODE_ENV === "dev" })
// );

router.get("/", (req, res) => {
  res.json({ message: "welcome to the API" });
});

// app.listen(port, () => {
//   connectDB();
//   console.log(`Server running on port: ${port}`);
// });

app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
