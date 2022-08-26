import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { IMovie } from '../models/movie';
import { Box, Chip } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginBottom: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

interface IProps {
  movie: IMovie;
}

export default function Movie({ movie }: IProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {movie.genre}
        </Typography>
        <Typography variant="h5" component="h2">
          {movie.film}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Lead Studio: {movie.leadStudio}
        </Typography>
        <Typography variant="body2" component="p">
          <Box display="flex">
            <Box mx={1}>
              Audience Score: <Chip label={movie.audienceScore} variant="outlined" color="secondary" />
            </Box>
            <Box mx={1}>
              Year: <Chip label={movie.year} variant="outlined" />
            </Box>
            <Box mx={1}>
              Worldwide Gross: <Chip label={movie.worldwideGross} variant="outlined" />
            </Box>
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
}
