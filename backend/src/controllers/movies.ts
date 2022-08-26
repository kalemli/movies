import { Request, Response } from 'express';
import csv from 'csvtojson/v2';
import { IMoive } from '../../models/movie';

let movies: IMoive[] = [];

export const search = async (req: Request, res: Response) => {
  const { year, genre } = req.query;
  let result = movies;

  result = movies.filter(
    m => (!year || m.Year === +year) && (!genre || m.Genre.toLowerCase().includes(genre.toString().toLowerCase()))
  );

  res.status(200).send(result);
};

export const reload = async (req: Request, res: Response) => {
  loadMoives();
  res.sendStatus(200);
};

export async function loadMoives() {
  try {
    movies = await csv({
      colParser: {
        id: 'number',
        film: 'string',
        genre: 'string',
        leadStudio: 'string',
        audienceScore: 'number',
        profitability: 'number',
        tottenTomatoes: 'number',
        worldwideGross: 'string',
        year: 'number',
      },
      checkType: true,
    }).fromFile('movies.csv');

    console.log('All Movies loaded successfully');
  } catch (e) {
    console.log('Error in loading movies: ', e);
  }
}
