import axios from 'axios';
import fastXmlParser from 'fast-xml-parser';

const key = process.env.INTERPARK_KEY
export const getBooks = async (query) => {
  const url = `http://book.interpark.com/api/search.api?key=${key}&query=${encodeURI(query)}`;
  const { data: html } = await axios.get(url);
  const data = fastXmlParser.parse(html);
  const items = data.channel.item;

  const books = items.map((item) => {
    const { title, priceStandard, author, publisher } = item;
    return {
      title,
      author,
      publisher,
      price: priceStandard,
    }
  });

  return books;
};
