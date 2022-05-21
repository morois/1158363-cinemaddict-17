import { getRendomIndexArr } from '../utils.js';

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

const EMOTIONS = ['smile', 'sleeping', 'puke', 'angry'];

export const generateComment = () => ({
  'id': '42',
  'author': getRendomIndexArr(AUTHOR),
  'comment': getRendomIndexArr(COMMENTS),
  'date': '2019-05-11T16:12:32.554Z',
  'emotion': getRendomIndexArr(EMOTIONS),
});
