const API_KEY = '31c28f7c51ad41839254a1994eb98dd0';
const BASE_URL = 'https://newsapi.org/v2';
const options = new URLSearchParams({
  apiKey: API_KEY,
  country: 'ua',
});

export const getTopNews = () => {
  return fetch(`${BASE_URL}/top-headlines?${options}`).then(response => {
    if (!response.ok) {
      Promise.reject(response.status);
    }

    return response.json();
  });
};
