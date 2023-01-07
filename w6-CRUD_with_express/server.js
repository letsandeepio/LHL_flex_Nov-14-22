const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

const generateFakeID = () => {
  return Date.now();
};

// Middlewares
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

const rocketsDB = {
  bfr: {
    wikipedia: "https://en.wikipedia.org/wiki/BFR_(rocket)",
    rocket_id: "bfr",
    rocket_name: "Big Falcon Rocket",
    rocket_type: "rocket",
  },
  falcon1: {
    wikipedia: "https://en.wikipedia.org/wiki/Falcon_1",
    rocket_id: "falcon1",
    rocket_name: "Falcon 1",
    rocket_type: "rocket",
  },
  falconheavy: {
    wikipedia: "https://en.wikipedia.org/wiki/Falcon_Heavy",
    rocket_id: "falconheavy",
    rocket_name: "Falcon Heavy",
    rocket_type: "rocket",
  },
};

app.get("/", (req, res) => {
  res.send("<h1>Welcome to SpaceX Rockets Apps!</h1>");
});

app.get("/rockets", (req, res) => {
  const header = "List of All Rockets!!!";
  const rocketsArr = Object.values(rocketsDB);

  const templateVars = {
    header,
    rocketsArr,
  };

  res.render("rockets", templateVars);
});

app.get("/rockets/new", (req, res) => {
  res.render("new");
});

app.get("/rockets/:id", (req, res) => {
  const id = req.params.id;

  const rocket = rocketsDB[id];

  if(!rocket) {
    return res.status(404).send("Error: Rocket not found");
  }

  const templateVars = {
    rocket,
  };

  res.render("rocket", templateVars);
});

app.post("/rockets", (req, res) => {
  const rocketname = req.body.rocket_name;

  const newRocketID = generateFakeID();

  rocketsDB[newRocketID] = {
    wikipedia: "https://www.example.com",
    rocket_id: newRocketID,
    rocket_name: rocketname,
    rocket_type: "rocket",
  };

  res.redirect("/rockets");
});

app.get("/rockets/:id/update", (req, res) => {
  const id = req.params.id;

  const rocket = rocketsDB[id];

  const templateVars = {
    rocket,
  };

  res.render("edit", templateVars);
});

app.post("/rockets/:id", (req, res) => {
  const id = req.params.id;
  const rocketname = req.body.rocket_name;

  rocketsDB[id].rocket_name = rocketname;

  res.redirect("/rockets");
});

app.post("/rockets/:id/delete", (req, res) => {
  const id = req.params.id;

  delete rocketsDB[id];

  res.redirect("/rockets");
});


app.listen(PORT, () => {
  console.log(`The server is listening for connections on port ${PORT}`);
});
