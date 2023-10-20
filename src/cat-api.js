import axios from 'axios';

const apiKey =
  'live_uNRLc0COBdNx17WnAGlMUQQ1O3sWv1wRyrDEdbOTLaWw1HoYnzFviM8nc7f87LBo';

axios.defaults.headers.common['x-api-key'] = apiKey;

export async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchCatByBreed(breedId) {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
    );
    const catData = response.data[0];

    if (catData && catData.breeds && catData.breeds[0]) {
      return {
        name: catData.breeds[0].name,
        description: catData.breeds[0].description,
        temperament: catData.breeds[0].temperament,
        imageUrl: catData.url,
      };
    }
  } catch (error) {
    throw error;
  }
}
