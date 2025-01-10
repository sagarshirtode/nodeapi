const express = require("express");
const data = require("./data.json");
const app = express();
const port = 3000;

app.get("/", (req, resp) => {
  resp.json({ title: "NodeAPI", message: "Success", status: 200, data: data });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
