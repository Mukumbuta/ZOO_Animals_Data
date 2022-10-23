/* eslint-disable camelcase */
const ANIMALS_FETCHED = 'ANIMALS_FETCHED';
const baseURL = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';

const fetchAnimals = () => async (dispatch) => {
  const response = await fetch(baseURL);
  const data = await response.json();
  const animals = [];
  data.forEach((res) => {
    const {
      name,
      id,
      animal_type,
      habitat,
      diet,
      image_link,
      lifespan,
      latin_name,
      length_max,
      length_min,
      weight_max,
      weight_min,
      geo_range,
      active_time,
    } = res;
    const animalData = {
      name,
      id,
      animal_type,
      habitat,
      diet,
      image_link,
      lifespan,
      latin_name,
      length_max,
      length_min,
      weight_max,
      weight_min,
      geo_range,
      active_time,
    };
    animals.push(animalData);
  });
  dispatch({
    type: ANIMALS_FETCHED,
    animals,
  });
};

export default fetchAnimals;
