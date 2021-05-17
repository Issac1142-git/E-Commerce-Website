const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const compression = require("compression");
const app = express();
const enforce = require("express-sslify");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(enforce.HTTPS({ trustProtoHeader: true }));

if (process.env.NODE_ENV === "production") {
  app.use(compression());
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "inr",
  };
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      //   console.log(stripeErr);
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

app.listen(port, (err) => {
  if (err) throw new err();
  console.log("Server Running on" + port);
});
