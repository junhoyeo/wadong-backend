from bs4 import BeautifulSoup
import sys
import json
import requests

headers = {
  'User-Agent': (
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) '
    'AppleWebKit/537.36 (KHTML, like Gecko) '
    'Chrome/39.0.2171.95 '
    'Safari/537.36'
  )
}

r = requests.post('http://www.cgv.co.kr/movies/finder.aspx', headers=headers, data={
  's': True,
  'kt': 0,
  'searchtxt': sys.argv[1],
  'genre': '',
  'indi': False,
  'national': '',
  'grade': ',',
  'sdate': 1960,
  'edate': 2020,
  'page': 1,
})

html = BeautifulSoup(r.text, 'html.parser')
container = html.find('div', class_='wrap-movie')
movies = [
  {
    'title': movie.find('strong', class_='title').text.strip(),
    'image': movie.find('img')['src'],
    'opened': movie.find('span', class_='txt-info').text.strip()[:10],
    'score': movie.find('span', class_='percent').text.strip(),
  }
  for movie in container.find_all('li')
  if movie.find('strong', class_='title')
]

print(json.dumps(movies))
