import '@testing-library/jest-dom/extend-expect';
import Data from '../mock/fetchAnimals';

describe('Should fetch data from the API', () => {
  test('should fetch fish Species Name', async () => {
    await Data().then((data) => expect(data.data[0]['Species Name']).toBe('Crimson Jobfish'));
  });
  test('Should fetch fish Calories Content', async () => {
    await Data().then((data) => expect(data.data[0]['Calories Content']).toBe(100));
  });
});
