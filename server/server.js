const express = require("express");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());
const data = require("./data.json");
let id = 4;

app.get("/messages", (req, res) => {
 res.send(data);
});



app.post("/messages", (req, res) => {
  data.push({ ...req.body, id: id++ });
  console.log(data);
  return res.sendStatus(201);
});


app.delete("/messages/:id", (req, res) => {
  let findByIndex = data.findIndex(
    (data) => data.id == req.params.id
  );
  bookings.splice(findByIndex, 1);
  if (findByIndex === -1) res.status(404).send("The person with these details is not in our database");
  res.sendStatus(200);
});






const listener = app.listen(4009, function () {
  console.log("Your app is listening on port " + listener.address().port);
});