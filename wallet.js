// =========================================
// SOCOETRAP Wallet
// Pi Network Testnet
// wallet.js - Partie 1
// =========================================

const BACKEND_URL = "https://socoetrap-pi-backend-1.onrender.com";

let currentUser = null;
let accessToken = null;
let walletBalance = 0;

// Initialisation du SDK Pi
async function initPi() {

    try {

        Pi.init({
            version: "2.0",
            sandbox: true
        });

        console.log("SDK Pi initialisé");

    } catch (error) {

        console.error(error);

    }

}

// Connexion Pi
async function loginWithPi() {

    try {

        const scopes = [
            "username",
            "payments",
            "wallet_address"
        ];

        const auth = await Pi.authenticate(scopes, function(payment){});

        currentUser = auth.user;

        accessToken = auth.accessToken;

        document.getElementById("piLoginBtn").innerHTML =
            "✅ " + currentUser.username;

        console.log(auth);

    } catch (error) {

        console.error(error);

        alert("Connexion Pi annulée.");

    }

}

document.addEventListener("DOMContentLoaded", () => {

    initPi();

    const loginBtn =
        document.getElementById("piLoginBtn");

    if(loginBtn){

        loginBtn.onclick = loginWithPi;

    }

});
// =========================================
// Paiement Pi Testnet
// Partie 2
// =========================================

async function payWithPi() {

    if (!currentUser) {

        alert("Veuillez d'abord vous connecter avec Pi.");

        return;

    }

    const amount =
        parseFloat(document.getElementById("paymentAmount").value);

    const memo =
        document.getElementById("paymentMemo").value;

    if (!amount || amount <= 0) {

        alert("Veuillez saisir un montant valide.");

        return;

    }

    if (memo.trim() === "") {

        alert("Veuillez saisir une description.");

        return;

    }

    try {

        Pi.createPayment(

            {
                amount: amount,
                memo: memo,
                metadata: {
                    app: "SOCOETRAP Wallet",
                    network: "Pi Testnet"
                }
            },

            {

                onReadyForServerApproval: async function(paymentId) {

                    console.log("Paiement prêt :", paymentId);

                    try {

                        await fetch(
                            BACKEND_URL + "/approve",
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    paymentId
                                    // =========================================
// SOCOETRAP Wallet
// Wallet.js - Partie 3
// =========================================

// Solde de démonstration (Testnet)
function updateBalance() {

    walletBalance = 1000.000000;

    const balance = document.getElementById("balance");

    if (balance) {

        balance.innerHTML =
            walletBalance.toFixed(6) + " π";

    }

    const lastUpdate =
        document.getElementById("lastUpdate");

    if (lastUpdate) {

        lastUpdate.innerHTML =
            "Dernière mise à jour : " +
            new Date().toLocaleTimeString();

    }

}

// Boutons de démonstration
function sendPi() {
    alert("Fonction Envoyer (Testnet)");
}

function receivePi() {
    alert("Fonction Recevoir (Testnet)");
}

function buyPi() {
    alert("Mode Acheter (Crypto ↔ Fiat)\nVersion Test");
}

function sellPi() {
    alert("Mode Vendre (Fiat ↔ Crypto)\nVersion Test");
}

function swapPi() {
    alert("Swap Pi\nVersion Test");
}

// Initialisation de l'interface
document.addEventListener("DOMContentLoaded", () => {

    updateBalance();

    document.getElementById("refreshBtn")?.addEventListener("click", updateBalance);

    document.getElementById("sendBtn")?.addEventListener("click", sendPi);

    document.getElementById("receiveBtn")?.addEventListener("click", receivePi);

    document.getElementById("buyBtn")?.addEventListener("click", buyPi);

    document.getElementById("sellBtn")?.addEventListener("click", sellPi);

    document.getElementById("swapBtn")?.addEventListener("click", swapPi);

    console.log("SOCOETRAP Wallet Test
