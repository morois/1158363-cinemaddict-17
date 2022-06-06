import { getRendomIndexArr, getRandomInt } from '../utils/common-utils.js';

const MIN_ID = 10;
const MAX_ID = 99;

const AUTHOR = [
  'Neo Acosta',
  'Jimi Neal',
  'Arley Orr',
];

const COMMENTS = [
  'It\'s bleak, yes, but it\'s beautiful in equal measure.',
  'So beautiful and sad. Spectacular cinematography.',
  'Great direction and acting .',
  'Not a lot of script, but the nicely shot visuals tell much of the story anyhow.'
];

const EMOTIONS = [
  './images/emoji/smile.png',
  './images/emoji/angry.png',
  './images/emoji/puke.png',
  './images/emoji/sleeping.png',
];

export const generateComment = () => ({
  'id': getRandomInt(MIN_ID, MAX_ID),
  'author': getRendomIndexArr(AUTHOR),
  'comment': getRendomIndexArr(COMMENTS),
  'date': '2019-05-11T16:12:32.554Z',
  'emotion': getRendomIndexArr(EMOTIONS),
});
