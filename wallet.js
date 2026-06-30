async function loadPrices() {

const url =
"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,solana,ripple,tether,pi-network&vs_currencies=usd";

try {

const response = await fetch(url);

const data = await response.json();

const coins = [

{name:"Pi Network",symbol:"PI",price:data["pi-network"]?.usd ?? "N/A"},

{name:"Bitcoin",symbol:"BTC",price:data.bitcoin.usd},

{name:"Ethereum",symbol:"ETH",price:data.ethereum.usd},

{name:"BNB",symbol:"BNB",price:data.binancecoin.usd},

{name:"Solana",symbol:"SOL",price:data.solana.usd},

{name:"XRP",symbol:"XRP",price:data.ripple.usd},

{name:"USDT",symbol:"USDT",price:data.tether.usd}

];

coinList.innerHTML="";

coins.forEach((coin)=>{

coinList.innerHTML+=`
<div class="coin">
<div>
<div class="coin-name">${coin.name}</div>
<small>${coin.symbol}</small>
</div>

<div class="coin-price">
$${coin.price}
</div>
</div>
`;

});

}catch(error){

console.log(error);

}

}

loadPrices();
