let mappingURL = "https://prices.runescape.wiki/api/v1/osrs/mapping"
let priceURL = "https://prices.runescape.wiki/api/v1/osrs/latest"
let volURL = "https://api.weirdgloop.org/exchange/history/osrs/latest?id=2"

let headers = new Headers({
    "Accept"       : "application/json",
    "Content-Type" : "application/json",
    "User-Agent": "Personal portfolio trading project.",
    "Email" : "rmemmer3@gmail.com"
})

fetch(priceURL, {
    mode: 'cors',
    method : 'GET',
    headers : headers
})
    .then(res => res.json())
    .then(dater => console.log(dater))

fetch(mappingURL, {
    mode: 'cors',
    method : 'GET',
    headers : headers
})
    .then(res => res.json())
    .then(data => console.log(data))

fetch(volURL, {
    method : 'GET',
    headers : headers
})
    .then(res => res.json())
    .then(data => console.log(data))