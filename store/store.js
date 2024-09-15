import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import rootReducer from '../reducers/';

const store = configureStore({
    reducer: rootReducer,
    // Middleware is automatically added, including redux-thunk
  });

export default store;
