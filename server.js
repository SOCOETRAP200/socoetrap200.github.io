const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Accueil
app.get("/", (req, res) => {
  res.json({
    success: true,
    app: "SOCOETRAP",
    network: "Pi Testnet",
    status: "Online",
    version: "1.0.0"
  });
});

// Vérification de santé
app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend opérationnel"
  });
});

// Préparation d'un paiement (placeholder)
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
        environment: "Pi Testnet"
      }
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
});

// Route de test
app.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "SOCOETRAP Backend fonctionne correctement."
  });
});

// Démarrage
app.listen(PORT, () => {
  console.log(`SOCOETRAP Backend démarré sur le port ${PORT}`);
});
