Pi.init({
  version: "2.0",
  sandbox: true
});
// ===============================
// SOCOETRAP Wallet - wallet.js 
// ===============================

const API =
"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,binancecoin,tether&price_change_percentage=24h";

let marketData = [];

const coinLogos = {
    bitcoin: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
    ethereum: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    binancecoin: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png",
    tether: "https://assets.coingecko.com/coins/images/325/large/Tether.png"
};

async function loadMarket() {

    try {

        const response = await fetch(API);

        const data = await response.json();

        marketData = data;

        displayCoins();

        updateBalance();

        updateLastRefresh();

    } catch (e) {

        console.log(e);

        document.getElementById("marketList").innerHTML =
        "<p>Impossible de charger les données.</p>";

    }

}

function displayCoins() {

    const list = document.getElementById("marketList");

    list.innerHTML = "";

    marketData.forEach(coin => {

        const color =
        coin.price_change_percentage_24h >= 0
        ? "#00ff88"
        : "#ff4b4b";

        const sign =
        coin.price_change_percentage_24h >= 0
        ? "+"
        : "";

        list.innerHTML += `

<div class="coin" onclick="openCoin('${coin.id}')">

<div class="coin-left">

<img src="${coinLogos[coin.id]}">

<div>

<div class="coin-name">
${coin.name}
</div>

<div class="coin-symbol">
${coin.symbol.toUpperCase()}
</div>

</div>

</div>

<div style="text-align:right">

<div class="coin-price">
$${coin.current_price.toLocaleString()}
</div>

<div style="color:${color}">

${sign}${coin.price_change_percentage_24h.toFixed(2)}%

</div>

</div>

</div>

`;

    });

}

function updateBalance() {

    let total = 12584.92;

    document.getElementById("balance").innerHTML =
    "$" + total.toLocaleString();

}

function updateLastRefresh() {

    const now = new Date();

    document.getElementById("lastUpdate").innerHTML =
    "Dernière mise à jour : " +
    now.toLocaleTimeString();

}

document
.getElementById("refreshBtn")
.addEventListener("click", loadMarket);

loadMarket();

setInterval(loadMarket,30000);
// ===============================


let chart = null;

async function openCoin(coinId) {

    try {

        const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`
        );

        const data = await response.json();

        const labels = [];
        const prices = [];

        data.prices.forEach(item => {

            const date = new Date(item[0]);

            labels.push(
                date.getDate() + "/" +
                (date.getMonth() + 1)
            );

            prices.push(item[1]);

        });

        drawChart(labels, prices, coinId);

    } catch (error) {

        console.error(error);

        alert("Impossible de charger le graphique.");

    }

}

function drawChart(labels, prices, coinId) {

    const canvas = document.getElementById("priceChart");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (chart !== null) {
        chart.destroy();
    }

    chart = new Chart(ctx, {

        type: "line",

        data: {

            labels: labels,

            datasets: [

                {

                    label: coinId.toUpperCase(),

                    data: prices,

                    borderWidth: 3,

                    fill: false,

                    tension: 0.35

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: true

                }

            },

            scales: {

                x: {

                    display: true

                },

                y: {

                    display: true

                }

            }

        }

    });

}

// Charger automatiquement le graphique du Bitcoin
setTimeout(() => {
    openCoin("bitcoin");
}, 1500);

let chart = null;

async function openCoin(coinId) {

    try {

        const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`
        );

        const data = await response.json();

        const labels = [];
        const prices = [];

        data.prices.forEach(item => {

            const date = new Date(item[0]);

            labels.push(
                date.getDate() + "/" +
                (date.getMonth() + 1)
            );

            prices.push(item[1]);

        });

        drawChart(labels, prices, coinId);

    } catch (error) {

        console.error(error);

        alert("Impossible de charger le graphique.");

    }

}

function drawChart(labels, prices, coinId) {

    const canvas = document.getElementById("priceChart");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (chart !== null) {
        chart.destroy();
    }

    chart = new Chart(ctx, {

        type: "line",

        data: {

            labels: labels,

            datasets: [

                {

                    label: coinId.toUpperCase(),

                    data: prices,

                    borderWidth: 3,

                    fill: false,

                    tension: 0.35

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: true

                }

            },

            scales: {

                x: {

                    display: true

                },

                y: {

                    display: true

                }

            }

        }

    });

}

// Charger automatiquement le graphique du Bitcoin
setTimeout(() => {
    openCoin("bitcoin");
}, 1500);

let chart = null;

async function openCoin(coinId) {

    try {

        const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`
        );

        const data = await response.json();

        const labels = [];
        const prices = [];

        data.prices.forEach(item => {

            const date = new Date(item[0]);

            labels.push(
                date.getDate() + "/" +
                (date.getMonth() + 1)
            );

            prices.push(item[1]);

        });

        drawChart(labels, prices, coinId);

    } catch (error) {

        console.error(error);

        alert("Impossible de charger le graphique.");

    }

}

function drawChart(labels, prices, coinId) {

    const canvas = document.getElementById("priceChart");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (chart !== null) {
        chart.destroy();
    }

    chart = new Chart(ctx, {

        type: "line",

        data: {

            labels: labels,

            datasets: [

                {

                    label: coinId.toUpperCase(),

                    data: prices,

                    borderWidth: 3,

                    fill: false,

                    tension: 0.35

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: true

                }

            },

            scales: {

                x: {

                    display: true

                },

                y: {

                    display: true

                }

            }

        }

    });

}

// Charger automatiquement le graphique du Bitcoin
setTimeout(() => {
    openCoin("bitcoin");
}, 1500);

function sendCrypto() {

    const address = prompt("Adresse du destinataire :");

    if (!address) return;

    const amount = prompt("Montant à envoyer :");

    if (!amount) return;

    alert(
        "Prévisualisation\n\n" +
        "Adresse : " + address +
        "\nMontant : " + amount +
        "\n\nCette fonctionnalité sera reliée à une blockchain dans une future version."
    );

}

function receiveCrypto() {

    const walletAddress =
        "0x1234ABCD5678EFGH9012IJKL3456MNOP7890QRST";

    navigator.clipboard.writeText(walletAddress)
        .then(() => {
            alert(
                "Adresse copiée :\n\n" + walletAddress
            );
        })
        .catch(() => {
            alert(walletAddress);
        });

}

function buyCrypto() {

    alert(
        "Fonction Acheter.\n\n" +
        "À connecter ultérieurement à un fournisseur de paiement."
    );

}

function sellCrypto() {

    alert(
        "Fonction Vendre.\n\n" +
        "À connecter ultérieurement à un fournisseur d'échange."
    );

}

function swapCrypto() {

    alert(
        "Fonction Swap.\n\n" +
        "À connecter ultérieurement à un protocole d'échange décentralisé."
    );

}

document.addEventListener("DOMContentLoaded", () => {

    const sendBtn = document.getElementById("sendBtn");
    const receiveBtn = document.getElementById("receiveBtn");
    const buyBtn = document.getElementById("buyBtn");
    const sellBtn = document.getElementById("sellBtn");
    const swapBtn = document.getElementById("swapBtn");

    if (sendBtn) sendBtn.onclick = sendCrypto;
    if (receiveBtn) receiveBtn.onclick = receiveCrypto;
    if (buyBtn) buyBtn.onclick = buyCrypto;
    if (sellBtn) sellBtn.onclick = sellCrypto;
    if (swapBtn) swapBtn.onclick = swapCrypto;

});
async function loginWithPi() {
...
}
