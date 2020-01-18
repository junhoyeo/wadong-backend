from bs4 import BeautifulSoup
import json
import requests

url = 'https://ko.wikipedia.org/wiki/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98_%EC%98%81%ED%99%94_%ED%9D%A5%ED%96%89_%EA%B8%B0%EB%A1%9D'
r = requests.get(url)

html = BeautifulSoup(r.text, 'html.parser')
container = html.find('table', class_='wikitable')

rows = container.find_all('tr')
movies = [row.find_all('td')[1] for row in rows if len(row.find_all('td'))]
movies = [
  movie.find('a').attrs['title'].split('(')[0].split(':')[0].strip()
  for movie in movies
]

print(json.dumps(movies))
