/* eslint-disable camelcase */
import { v4 as uuidv4 } from 'uuid';

const ANIMALS_FETCHED = 'ANIMALS_FETCHED';
const baseURL = 'https://www.fishwatch.gov/api/species';

const fetchAnimals = () => async (dispatch) => {
  const response = await fetch(baseURL);
  const data = await response.json();
  const animals = [];

  data.forEach((res) => {
    const {
      'Species Name': name,
      Carbohyddrate,
      Calories,
      Cholesterol,
      Sodium,
      'Serving Weigth': servingWeigth,
      Color,
      'Image Gallery': imageLink,
      Habitat,
      Location,
      Population,
      Protein,
    } = res;

    const images = imageLink;
    /* eslint-disable no-restricted-syntax */
    /* eslint-disable guard-for-in */
    for (const key in images) {
      const actualimagelink = images[key].src;
      const fish_id = uuidv4();
      const animalData = {
        name,
        fish_id,
        actualimagelink,
        Color,
        Carbohyddrate,
        Calories,
        Cholesterol,
        Sodium,
        servingWeigth,
        Habitat,
        Location,
        Population,
        Protein,
      };
      animals.push(animalData);
    }
  });
  dispatch({
    type: ANIMALS_FETCHED,
    animals,
  });
};

export default fetchAnimals;
