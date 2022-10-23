import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Animal from './component/Animal';
import AnimalDetails from './component/AnimalDetails';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <section>
      <Routes>
        <Route exact path="/" element={<Animal />} />
        <Route exact path="/*" element={<AnimalDetails />} />
      </Routes>
    </section>
  </Provider>
);

export default App;
