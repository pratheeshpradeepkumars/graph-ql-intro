const express = require("express");
const expressGraphQL = require("express-graphql");
const cors = require("cors");
const path = require("path");
const schema = require("./schema.js");

const app = express();

// Allow Origin
app.use(cors());

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true
  })
);

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
