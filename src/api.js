import axios from 'axios';
// require('dotenv').config();


const searchImages = async(term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: process.env.REACT_APP_UNSPLASH_API
    },
    params: {
      query: term,
    },
  });

  console.log(response.data.results);
  return response.data.results;

};


export default searchImages;