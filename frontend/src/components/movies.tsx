import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import { MovieContext } from '../context';
import Movie from './movie';

const useStyles = makeStyles({
  root: {
    maxHeight: 'calc(100vh - 200px)',
    overflow: 'scroll',
  },
});

export default function Movies() {
  const classes = useStyles();
  const { movies, loading } = useContext(MovieContext);
  return (
    <div className={classes.root}>
      {loading ? <CircularProgress size={30} /> : movies.map(movie => <Movie key={movie.id} movie={movie} />)}
    </div>
  );
}
