export interface IMovie {
  id: number;
  film: string;
  genre: string;
  leadStudio: string;
  audienceScore: number;
  profitability: number;
  tottenTomatoes: number;
  worldwideGross: string;
  year: number;
}

export interface ISearchModel {
  year?: number;
  genre?: string;
}

export interface ActionResult {
  status: 'SUCCESS' | 'ERROR';
  error?: any;
}
