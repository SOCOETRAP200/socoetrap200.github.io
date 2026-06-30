// ===============================
// NAVIGATION ENTRE LES PAGES
// ===============================

function showPage(pageId) {

    document
    .querySelectorAll(".page")
    .forEach(page => {

        page.classList.remove("active");

    });

    document
    .getElementById(pageId)
    .classList.add("active");

    document
    .querySelectorAll(".nav-btn")
    .forEach(btn => {

        btn.classList.remove("active");

    });

}

// ===============================
// MODALES
// ===============================

function openModal(id){

    const modal =
    document.getElementById(id);

    if(modal){

        modal.style.display = "flex";

    }

}

function closeModal(id){

    const modal =
    document.getElementById(id);

    if(modal){

        modal.style.display = "none";

    }

}

// ===============================
// PRIX CRYPTO EN TEMPS RÉEL
// ===============================

let btcPrice = 0;
let ethPrice = 0;
let bnbPrice = 0;
let usdtPrice = 1;

async function updateMarket(){

    try{

        const response =
        await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,tether&vs_currencies=usd&include_24hr_change=true"
        );

        const data =
        await response.json();

        btcPrice =
        data.bitcoin.usd;

        ethPrice =
        data.ethereum.usd;

        bnbPrice =
        data.binancecoin.usd;

        usdtPrice =
        data.tether.usd;

        document.getElementById(
        "btcPrice").innerHTML =
        "$" +
        btcPrice.toLocaleString();

        document.getElementById(
        "ethPrice").innerHTML =
        "$" +
        ethPrice.toLocaleString();

        document.getElementById(
        "bnbPrice").innerHTML =
        "$" +
        bnbPrice.toLocaleString();

        document.getElementById(
        "usdtPrice").innerHTML =
        "$" +
        usdtPrice;

        document.getElementById(
        "btcChange").innerHTML =
        data.bitcoin
        .usd_24h_change
        .toFixed(2) + "%";

        document.getElementById(
        "ethChange").innerHTML =
        data.ethereum
        .usd_24h_change
        .toFixed(2) + "%";

        document.getElementById(
        "bnbChange").innerHTML =
        data.binancecoin
        .usd_24h_change
        .toFixed(2) + "%";

        const marketStatus =
        document.getElementById(
        "marketStatus");

        marketStatus.innerHTML =
        "BTC $" +
        btcPrice.toLocaleString();

    }

    catch(error){

        console.log(error);

        document.getElementById(
        "marketStatus"
        ).innerHTML =
        "Marché indisponible";

    }

}

updateMarket();

setInterval(
updateMarket,
30000
);

// ===============================
// CALCULATEUR DE SWAP
// ===============================

function calculateSwap(){

    const amount =
    parseFloat(
    document.getElementById(
    "swapAmount"
    ).value
    );

    const fromCoin =
    document.getElementById(
    "fromCoin"
    ).value;

    const toCoin =
    document.getElementById(
    "toCoin"
    ).value;

    if(isNaN(amount)){

        document.getElementById(
        "swapResult"
        ).innerHTML =
        "Vous recevrez...";

        return;

    }

    let usdValue = 0;

    if(fromCoin === "BTC"){

        usdValue =
        amount * btcPrice;

    }

    if(fromCoin === "ETH"){

        usdValue =
        amount * ethPrice;

    }

    if(fromCoin === "BNB"){

        usdValue =
        amount * bnbPrice;

    }

    if(fromCoin === "USDT"){

        usdValue =
        amount;

    }

    let received = 0;

    if(toCoin === "BTC"){

        received =
        usdValue / btcPrice;

    }

    if(toCoin === "ETH"){

        received =
        usdValue / ethPrice;

    }

    if(toCoin === "BNB"){

        received =
        usdValue / bnbPrice;

    }

    if(toCoin === "USDT"){

        received =
        usdValue;

    }

    document.getElementById(
    "swapResult"
    ).innerHTML =

    "Vous recevrez environ " +

    received.toFixed(6) +

    " " +

    toCoin;

}

// ===============================
// SWAP
// ===============================

function swapCrypto(){

    calculateSwap();

    alert(
    "Swap simulé avec succès."
    );

}

// ===============================
// ACHAT
// ===============================

function buyCrypto(){

    alert(
    "Fonction Acheter prête."
    );

}

// ===============================
// ENVOYER
// ===============================

function sendCrypto(){

    alert(
    "Fonction Envoyer prête."
    );

}

// ===============================
// SOLDE
// ===============================

let balance =
24580;

setInterval(() => {

    const randomMove =
    Math.floor(
    Math.random() * 200 - 100
    );

    balance +=
    randomMove;

    if(balance < 1000){

        balance =
        1000;

    }

    document.getElementById(
    "balance"
    ).innerHTML =

    "$" +

    balance.toLocaleString()

    + ".00";

}, 5000);

// ===============================
// PWA
// ===============================

if("serviceWorker" in navigator){

window.addEventListener(

"load",

() => {

navigator.serviceWorker
.register(
"./service-worker.js"
)

.then(() => {

console.log(
"Service Worker installé"
);

})

.catch(error => {

console.log(error);

});

});

}
