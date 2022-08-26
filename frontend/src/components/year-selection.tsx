import React, { useContext } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { YEARS } from '../constants';
import { MovieContext } from '../context';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

export default function YearSelection() {
  const classes = useStyles();
  const { search, searchModel } = useContext(MovieContext);

  const handleYearSelection = (year?: number) => (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    search({ ...searchModel, year });
  };

  return (
    <List
      component="nav"
      subheader={
        <ListSubheader component="div" id="years-list">
          Production year of movies
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button selected={!searchModel.year} onClick={handleYearSelection(undefined)}>
        <ListItemText primary="ALL YEARS" />
      </ListItem>
      {YEARS.map(year => (
        <ListItem button key={year} selected={searchModel.year === year} onClick={handleYearSelection(year)}>
          <ListItemText primary={year} />
        </ListItem>
      ))}
    </List>
  );
}
