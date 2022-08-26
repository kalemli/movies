import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import YearSelection from './components/year-selection';
import SearchPanel from './components/search-panel';
import Movies from './components/movies';

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <YearSelection />
        </Grid>

        <Grid item xs={10}>
          <SearchPanel />
          <Movies />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
