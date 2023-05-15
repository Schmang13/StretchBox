import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/masterReducer';

const store = configureStore(
  reducers,
);

export default store;