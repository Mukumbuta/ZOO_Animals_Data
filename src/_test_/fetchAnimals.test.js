import '@testing-library/jest-dom/extend-expect';
import Data from '../mock/fetchAnimals';

describe('Should fetch data from the API', () => {
  test('should fetch animal name', async () => {
    await Data().then((data) => expect(data.data[0].name).toBe('Arctic Fox'));
  });
  test('Should fetch animal habitat', async () => {
    await Data().then((data) => expect(data.data[0].habitat).toBe('Arctic tundra'));
  });

  test('Should fetch animal life span', async () => {
    await Data().then((data) => expect(data.data[1].life_span).toEqual(20));
  });
});
