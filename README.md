# 와동 백엔드 목업

## 검색 API

### [책](./data/books.json)
```json
{
  "title": "트렌드 코리아 2020",
  "author": "김난도(Kim Ran Do),전미영,최지혜,이향은,이준영",
  "publisher": "미래의창",
  "price": 18000,
  "image": "http://bimage.interpark.com/goods_image/0/8/2/2/318360822h.jpg"
}
```

- `title`: 책 제목
- `author`: 작가
- `publisher`: 출판사
- `price`: 가격
- `image`: 표지 이미지

### [음식](./data/foods.json)
```json
{
  "name": "계절밥상 용산아이파크몰점",
  "address": "서울특별시 용산구 한강로3가 40-999",
  "category": "한정식",
  "image": "https://img.siksinhot.com/place/1417245142117606.png"
}
```

- `name`: 맛집 상호
- `address`: 주소
- `category`: 분류
- `image`: 대표 이미지

### [영화](./data/movies.json)
```json
{
  "title": "어벤져스: 엔드게임",
  "image": "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81749/81749_320.jpg",
  "opened": "2019.04.24",
  "score": "97%"
}
```

- `title`: 영화 제목
- `image`: 포스터 이미지
- `opened`: 개봉일
- `score`: 만족도

### [음악](./data/music.json)
```json
{
  "image": "https://cdnimg.melon.co.kr/cm2/album/images/103/59/162/10359162_500.jpg/melon/resize/120/quality/80/optimize",
  "title": "빌었어",
  "author": "창모 (CHANGMO)",
  "album": "Boyhood"
},
```

- `image`: 앨범 아트 이미지
- `title`: 음악 제목
- `author`: 아티스트 이름
- `album`: 앨범 이름
