import axios from 'axios';
import QueryString from 'qs';
import { BACKEND_URL } from '../constants';
import { IMovie, ISearchModel } from '../models/movie';

export class MoviesRepository {
  static async search(model: ISearchModel) {
    const params = QueryString.stringify(model, { skipNulls: true });
    const { data: movies } = await axios.get<IMovie[]>(`${BACKEND_URL}/search?${params}`);
    return movies;
  }

  static async reload() {
    await axios.post(`${BACKEND_URL}/reload`);
  }
}
