import { FilterType } from '../const.js';

export const filter = {
  [FilterType.ALL]: (films) => films,
  [FilterType.WATCHLIST]: (films) => films.filter((film) => film.user_details.watchlist),
  [FilterType.HISTORY]: (films) => films.filter((film) => film.user_details.history),
  [FilterType.FAVORITES]: (films) => films.filter((film) => film.user_details.favorites),
};
