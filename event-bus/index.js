const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];


app.post("/events", async (req, res) => {
  const event = req.body;
  console.log("Received Event:", event.type);
  events.push(event);
  axios.post('http://localhost:4000/events', event).catch((err) => {
    console.log(err.message);
  });
  axios.post('http://localhost:4001/events', event).catch((err) => {
    console.log(err.message);
  });
  axios.post('http://localhost:4002/events', event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4003/events", event).catch((err) => {
    console.log(err.message);
  });
  res.send({ status: 'OK' });

//   res.send({ status: "OK" });
});

app.get("/events", (req, res)=>{
  res.send(events);
});

app.listen(4005, () => {
  console.log("Event Bus is running on port 4005");
});