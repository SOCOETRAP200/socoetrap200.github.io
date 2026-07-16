const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    app: "SOCOETRAP Wallet Backend",
    status: "online",
    environment: "Pi Testnet"
  });
});

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend opérationnel"
  });
});

app.listen(PORT, () => {
  console.log(`SOCOETRAP Backend démarré sur le port ${PORT}`);
});
