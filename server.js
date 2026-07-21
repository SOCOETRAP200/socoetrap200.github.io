const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    success: true,
    app: "SOCOETRAP Wallet",
    status: "Online",
    environment: "Pi Testnet"
  });
});

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend opérationnel"
  });
});

// Route de test
app.post("/create-payment", async (req, res) => {
  try {
    const { amount, memo, metadata } = req.body;

    if (!amount || !memo) {
      return res.status(400).json({
        success: false,
        message: "amount et memo sont obligatoires"
      });
    }

    res.json({
      success: true,
      payment: {
        amount,
        memo,
        metadata: metadata || {},
        network: "Pi Testnet"
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`SOCOETRAP Backend démarré sur le port ${PORT}`);
});
