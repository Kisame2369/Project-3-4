import axios from 'axios';

const ACCESS_KEY = 'URekufA9uOVYTWxAYJ9v_TydA7UDV47QodL71Q9eSRc';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com/',
  params: {
    client_id: ACCESS_KEY,
  },
});

export const fetchImages = async (topic, currentPage = 1) => {
  const response = await instance.get('/search/photos', {
    params: {
      query: topic,
      page: currentPage,
      per_page: 12,
    },
  });
  
  
  return {
    images: response.data.results,      
    totalPages: response.data.total_pages  
  };
};