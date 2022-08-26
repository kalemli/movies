import * as React from 'react';
import { ActionResult, IMovie, ISearchModel } from './models/movie';
import { MoviesRepository } from './repositories/movies';

export type TMovieContext = {
  movies: IMovie[];
  loading: boolean;
  searchModel: ISearchModel;
  search: (model: ISearchModel) => Promise<ActionResult>;
  reload: () => void;
};

export const MovieContext = React.createContext<TMovieContext>({
  movies: [],
  loading: false,
  searchModel: {},
  search: () => Promise.resolve({ status: 'SUCCESS' }),
  reload: () => {},
});

export const useMovie = () => React.useContext(MovieContext);

const MovieProvider = (props: IProps) => {
  const [movies, setMovies] = React.useState<IMovie[]>([]);
  const [searchModel, setSearchModel] = React.useState<ISearchModel>({});
  const [loading, setLoading] = React.useState(false);

  const search = async (model: ISearchModel) => {
    const result: ActionResult = { status: 'SUCCESS' };
    try {
      setLoading(true);
      setSearchModel(model);
      const list = await MoviesRepository.search(model);
      setMovies(list);
    } catch (e: any) {
      result.status = 'ERROR';
      result.error = e;
    } finally {
      setLoading(false);
    }
    return result;
  };

  const reload = () => {
    setLoading(true);
    MoviesRepository.reload().finally(() => setLoading(false));
  };

  React.useEffect(() => {
    search({});
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        searchModel,
        loading,
        search,
        reload,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

interface IProps {
  children: React.ReactNode;
}

export default MovieProvider;
