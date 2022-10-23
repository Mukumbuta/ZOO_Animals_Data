import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import AnimalDetails from '../component/AnimalDetails';

describe('Render AnimalDetails component', () => {
  test('render HomePage', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><AnimalDetails /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
