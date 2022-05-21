import dayjs from 'dayjs';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if(min < 0) {
    min = 0;
  }
  if (max < min) {
    [min, max] = [max, min];
  }
  if (max === min) {
    return min;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloat = (min, max, afterPoint = 0) => {
  if(min < 0) {
    min = 0;
  }
  if (max < min) {
    [min, max] = [max, min];
  }
  if (max === min) {
    return min;
  }
  return +(Math.random() * (max - min) + min).toFixed(afterPoint);
};

const getRendomIndexArr = (array) => {
  const randomIndex = getRandomInt(0, array.length - 1);
  return array[randomIndex];
};

const getTimeFromMins = (mins) => {
  const hours = Math.trunc(mins/60);
  const minutes = mins % 60;
  return `${hours  }h. ${  minutes  }m.`;
};

const humanizeDate = (date) => dayjs(date).format('D MMMM');

export {getRandomInt, humanizeDate, getRandomFloat, getRendomIndexArr, getTimeFromMins};

