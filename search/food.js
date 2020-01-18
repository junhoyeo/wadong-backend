import axios from 'axios';
import cheerio from 'cheerio';

(async (query) => {
  const { data: html } = await axios.get(`https://www.siksinhot.com/search?keywords=${encodeURI(query)}`);
  const $ = cheerio.load(html);
  const dataString = $('script')[0].children[0].data
    .trim()
    .replace('window.__INITIAL_STATE__ = ', '');
  const data = JSON.parse(dataString);

  const { searchResultHotplace: { list: hotplaces } } = data;
  const result = hotplaces.map(({ pname, addr, hpSchCateNm, photo }) => ({
    name: pname,
    address: addr,
    category: hpSchCateNm,
    photo: `https://img.siksinhot.com/place/${photo.imgNm}`,
  }));
  return result;
})('원효로1동');
