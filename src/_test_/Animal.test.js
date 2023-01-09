import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Animal from '../component/Animal';

describe('Should render Animal component', () => {
  test('Should render HomePage', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><Animal /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
