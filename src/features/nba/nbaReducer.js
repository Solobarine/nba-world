import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const fetchTeams = async () => {
  const url = 'https://www.balldontlie.io/api/v1/teams';
  const data = await fetch(url);
  const teams = await data.json();
  console.log(teams)
  return teams;
}

export const getTeams = createAsyncThunk(
  'fetch/fetchTeams',
  fetchTeams,
);

const teamsSlice = createSlice({
  name: 'store',
  initialState: {
    teams: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: {
    [getTeams.pending]: (state) => {
      const response = state
      response.status = 'loading'
    },
    [getTeams.fulfilled]: (state, actions) => {
      const response = state
      response.status = 'success'
      response.teams = actions.payload.map(item => {
        if (true) return {...item}
      })
    },
    [getTeams.rejected]: (state) => {
      const response = state
      response.status = 'rejected'
    }
  }
});

export default teamsSlice.reducer;
