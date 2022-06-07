import { FilterType } from '../const.js';
import { filter } from '../utils/filter-utils.js';


export const generateFilter = (films) => Object.entries(filter).map(
  ([filterName, filterMovies]) => ({
    name: filterName,
    count: filterName === FilterType.ALL ? null : filterMovies(films).length,
  })
);
