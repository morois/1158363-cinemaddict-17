import dayjs from 'dayjs';
import { getRandomInt, getRandomFloat, getRendomIndexArr } from '../utils.js';

const MIN_RATING = 1;
const MAX_RATING = 10;

const MIN_RUNTIME = 100;
const MAX_RUNTIME = 200;

const RELEASE = ['1984', '1990', '2008', '2000', '1964'];
const GENRE = ['Drama', 'Thriller', 'Horror', 'Comedy', 'Adventure'];
const AGE_RATING = ['18+', '16+', '6+', '0+'];

const TITLE =  [
  'The Shawshank Redemption',
  'The Godfather',
  'The Dark Knight',
  'The Lord of the Rings: The Return of the King',
  'Schindler`s List',
];

const DESCRIPTION = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
];

const POSTERS = [
  'the-dance-of-life.jpg',
  'sagebrush-trail.jpg',
  'the-man-with-the-golden-arm.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'popeye-meets-sinbad.png',
  'made-for-each-other.png',
  'the-great-flamarion.jpg',
];

export const generateMovie = () => ({
  'id': '0',
  'comments': [
    11, 22, 33, 44, 55
  ],
  'film_info': {
    'title': getRendomIndexArr(TITLE),
    'alternative_title': '',
    'rating': getRandomFloat(MIN_RATING, MAX_RATING, 1),
    'poster': `images/posters/${getRendomIndexArr(POSTERS)}`,
    'age_rating': getRendomIndexArr(AGE_RATING),
    'director': 'Tom Ford',
    'writers': [
      'Takeshi Kitano'
    ],
    'actors': [
      'Morgan Freeman'
    ],
    'release': {
      'date': dayjs(getRendomIndexArr(RELEASE)).format('YYYY-MM-DD'),
      'release_country': 'Finland'
    },
    'runtime': getRandomInt(MIN_RUNTIME, MAX_RUNTIME),
    'genre': getRendomIndexArr(GENRE),
    'description': getRendomIndexArr(DESCRIPTION),
  },
  'user_details': {
    'watchlist': false,
    'already_watched': true,
    'watching_date': '2019-04-12T16:12:32.554Z',
    'favorite': false
  }
});

