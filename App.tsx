import React from 'react';

import Navigation from './src/navigation/index';

import configureStore from './src/store/reducers/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
