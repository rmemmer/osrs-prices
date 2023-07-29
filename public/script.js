let priceURL = "prices.runescape.wiki/api/v1/osrs"
let volURL = "https://api.weirdgloop.org/exchange/history/osrs/latest?id=2"

fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))