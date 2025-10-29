import { MAX_PERCENT_STARS_WIDTH, STARS_COUNT, months } from './const';

export const formatDate = (date: string) => {
  const dateParsed = new Date(date);

  return `${months[dateParsed.getMonth()]} ${dateParsed.getFullYear()}`;
};

export const getStarsWidth = (rating: number): string => `${(MAX_PERCENT_STARS_WIDTH * rating) / STARS_COUNT}%`;
