/* eslint-disable camelcase */
const ANIMALS_FETCHED = 'ANIMALS_FETCHED';
const baseURL = 'https://www.fishwatch.gov/api/species';

const fetchAnimals = () => async (dispatch) => {
  const response = await fetch(baseURL);
  const data = await response.json();
  console.log(data[0]['Image Gallery']);
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
    console.log(imageLink);

    const animalData = {
      name,
      imageLink,
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
  });
  dispatch({
    type: ANIMALS_FETCHED,
    animals,
  });
};

export default fetchAnimals;
