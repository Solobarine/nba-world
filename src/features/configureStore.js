import {configureStore} from '@reduxjs/toolkit';
import teamsReducer from './nba/nbaReducer';

const store = configureStore({
  reducer: {
    teams: teamsReducer,
  }
})

export default store;
