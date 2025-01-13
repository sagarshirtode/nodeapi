const express = require("express");
const app = express();
const port = 3000;

const data = {
  name: "Sagar Malhari Shirtode",
  dob: "13-May-1995",
  age: 29,
  email: "sagarshirtode112@gmail.com",
  phone1: "9370409917",
  phone2: "9168570199",
  whatsApp: "9370409917",
  education: [
    { class: "10", board: "Maharashtra State Board" },
    { class: "12", board: "Maharashtra State Board" },
    { class: "BCS", university: "Solapur University" },
    { class: "MCA", university: "Pune University" },
  ],
  currentCity: "Pune",
};

app.get("/", (req, resp) => {
  resp.json({ title: "NodeAPI", message: "Success", status: 200, data: data });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
