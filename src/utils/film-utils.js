import dayjs from 'dayjs';

const getTimeFromMins = (mins) => {
  const hours = Math.trunc(mins/60);
  const minutes = mins % 60;
  return `${hours  }h. ${  minutes  }m.`;
};

const humanizeDate = (date) => dayjs(date).format('D MMMM');

export {humanizeDate, getTimeFromMins};

