import { getRandomInt, getRandomFloat } from '../utils.js';

const MIN_RATING = 1;
const MAX_RATING = 10;

const generateRating = getRandomFloat(MIN_RATING, MAX_RATING, 1);

const generateDiscription = () => {
  const description = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'Nunc fermentum tortor ac porta dapibus.',
    'In rutrum ac purus sit amet tempus.',
  ];

  const randomIndex = getRandomInt(0, description.length - 1);

  return description[randomIndex];
};

const generateTitle = () => {
  const title = [
    'The Shawshank Redemption',
    'The Godfather',
    'The Dark Knight',
    'The Lord of the Rings: The Return of the King',
    'Schindler`s List',
  ];

  const randomIndex = getRandomInt(0, title.length - 1);

  return title[randomIndex];
};

export const generateMovieFish = () => ({
  'id': '0',
  'comments': [
    // $Comment.id$, $Comment.id$
  ],
  'film_info': {
    'title': generateTitle(),
    'alternative_title': 'Laziness Who Sold Themselves',
    'total_rating': generateRating,
    'poster': 'images/posters/blue-blazes.jpg',
    'age_rating': 0,
    'director': 'Tom Ford',
    'writers': [
      'Takeshi Kitano'
    ],
    'actors': [
      'Morgan Freeman'
    ],
    'release': {
      'date': '2019-05-11T00:00:00.000Z',
      'release_country': 'Finland'
    },
    'runtime': 77,
    'genre': [
      'Comedy'
    ],
    'description': generateDiscription(),
  },
  'user_details': {
    'watchlist': false,
    'already_watched': true,
    'watching_date': '2019-04-12T16:12:32.554Z',
    'favorite': false
  }
});

