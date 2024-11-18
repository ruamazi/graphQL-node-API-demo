import "dotenv/config";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";

const app = express();
const port = process.env.PORT || 3030;

app.use("/graphql", graphqlHTTP({ schema }));

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
