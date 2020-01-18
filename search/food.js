import axios from 'axios';
import cheerio from 'cheerio';

export const getFoods = async (query) => {
  const getDataFromList = (datalist) => datalist.map(({ pname, addr, mcateNm, photo }) => ({
    name: pname,
    address: addr,
    category: mcateNm,
    photo: photo ? `https://img.siksinhot.com/place/${photo.imgNm}` : null,
  }));

  const { data: html } = await axios.get(`https://www.siksinhot.com/search?keywords=${encodeURI(query)}`);
  const $ = cheerio.load(html);
  const dataString = $('script')[0].children[0].data
    .trim()
    .replace('window.__INITIAL_STATE__ = ', '');
  const data = JSON.parse(dataString);

  const { searchResultHotplace: { list: hotplaces } } = data;
  const { searchResultGeneral: { list: places } } = data;

  const result = getDataFromList(hotplaces)
    .concat(getDataFromList(places));
  return result;
};
