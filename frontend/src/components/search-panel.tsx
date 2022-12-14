import React, { useContext, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { MovieContext } from '../context';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
      marginBottom: 10,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  })
);

export default function SearchPanel() {
  const classes = useStyles();
  const { search, searchModel } = useContext(MovieContext);
  const [genre, setGenre] = useState('');
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      search({ ...searchModel, genre });
    }, 500);
    return () => clearTimeout(timeoutRef.current);
  }, [genre]);

  async function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setGenre(e.target.value);
  }

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search by genres"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={genre}
        onChange={handleSearch}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
