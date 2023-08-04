import axios from 'axios';

const searchImages = async(term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID RMXjxaRdh_fLRI2C5epDRWvTPe18gQIRrDbPLRpeevI',
    },
    params: {
      query: term,
    },
  });

  console.log(response.data.results);
  return response.data.results;

};


export default searchImages;