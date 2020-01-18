from bs4 import BeautifulSoup
import json
import requests

try:
  with open('./search.json') as f:
    search = json.load(f)
except:
  search = {}

r = requests.get('https://www.melon.com/chart/index.htm', headers={
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'
})
html = BeautifulSoup(r.text, 'html.parser')
container = html.find('div', class_='service_list_song')

rows = container.find_all('tr')
music = [
  {
    'image': row.find('img').attrs['src'],
    'title': row.find('div', class_='rank01').text.strip(),
    'author': row.find('div', class_='rank02').find('a').text,
    'album': row.find('div', class_='rank03').find('a').text,
  }
  for row in rows
  if len(row.find_all('td'))
]

search['music'] = music

with open('./search.json', 'w') as f:
  json.dump(search, f, indent=2, ensure_ascii=False)
  f.write('\n')
