const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    messaggio: "Benvenuto",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "Health-check-api",
    timestamp: new Date().toISOString(),
  });
});

app.get("/version", (req, res) => {
  res.json({
    version: "1.0.0",
  });
});

module.exports = app;
