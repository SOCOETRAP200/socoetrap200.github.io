
    const balance = document.getElementById("balance");
const refreshBtn = document.getElementById("refreshBtn");
const coinList = document.getElementById("coin-list");

let totalBalance = 15234.75;

const coins = [
  { name: "Pi Network", symbol: "PI", price: 0.75, amount: 1000 },
  { name: "Bitcoin", symbol: "BTC", price: 105000, amount: 0.05 },
  { name: "Ethereum", symbol: "ETH", price: 3500, amount: 1.2 },
  { name: "BNB", symbol: "BNB", price: 720, amount: 2 },
  { name: "Solana", symbol: "SOL", price: 185, amount: 15 },
  { name: "XRP", symbol: "XRP", price: 2.15, amount: 500 },
  { name: "USDT", symbol: "USDT", price: 1.00, amount: 1000 }
];

function updateBalance() {
  balance.textContent = "$" + totalBalance.toLocaleString();
}

function displayCoins() {
  coinList.innerHTML = "";

  coins.forEach((coin) => {
    const item = document.createElement("div");
    item.className = "coin";

    item.innerHTML = `
      <div>
        <div class="coin-name">${coin.name}</div>
        <small>${coin.amount} ${coin.symbol}</small>
      </div>

      <div class="coin-price">
        $${coin.price.toLocaleString()}
      </div>
    `;

    coinList.appendChild(item);
  });
}

refreshBtn.addEventListener("click", () => {
  totalBalance += Math.random() * 100 - 50;
  totalBalance = Number(totalBalance.toFixed(2));

  coins.forEach((coin) => {
    const variation = (Math.random() * 0.06) - 0.03;
    coin.price = Number((coin.price * (1 + variation)).toFixed(2));
  });

  updateBalance();
  displayCoins();
});

updateBalance();
displayCoins();
