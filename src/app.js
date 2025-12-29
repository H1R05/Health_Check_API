const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
  console.log(`Service running on port ${PORT}`);
});

module.exports = app;
