const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, resp) => {
  resp.json({ title: "NodeAPI", message: "Success", status: 200, data: [] });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
