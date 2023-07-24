import requests

url = "http://prices.runescape.wiki/api/v1/osrs/mapping"
response = requests.get(url)
print(response.text)