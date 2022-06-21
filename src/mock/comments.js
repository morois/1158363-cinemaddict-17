import { getRandomInt } from '../utils/common-utils.js';
import dayjs from 'dayjs';


const emojiSrcs = [
  './images/emoji/smile.png',
  './images/emoji/angry.png',
  './images/emoji/puke.png',
  './images/emoji/sleeping.png',
];
const commentTexts = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
];
const authors = [
  'Tim Macoveev',
  'John Doe',
  'Elon Mask',
];
const generateDate = () => {

  const daysGap = getRandomInt(-60, 0);
  let date = dayjs().add(daysGap, 'day').toDate();
  switch (true) {
    case date === 0:
      date = 'Today';
      break;
    case date > 0 && date < 3:
      date = `${date} days ago`;
      break;
    default:
      date = dayjs(date).format('YYYY/MM/DD H:mm');
      break;
  }

  return date;
};

export const generateComments = (filmsAmount = 10) => {

  const comments = [];

  const commentsAmount = getRandomInt(filmsAmount, filmsAmount * 3);
  for (let i = 1; i <= commentsAmount; i++) {
    comments.push({
      id: i,
      filmId: getRandomInt(1, filmsAmount),
      text: commentTexts[getRandomInt(0, commentTexts.length - 1)],
      emojiSrc: emojiSrcs[getRandomInt(0, emojiSrcs.length - 1)],
      author: authors[getRandomInt(0, authors.length - 1)],
      day: generateDate(),
    });
  }

  return comments;
};
