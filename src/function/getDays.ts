export const getDaysRemaining = (targetDate: string) => {
  const targetTime = new Date(targetDate).getTime();
  const currentTime = new Date().getTime();
  const oneDay = 24 * 60 * 60 * 1000;
  const remainingDays = Math.floor((targetTime - currentTime) / oneDay);
  return remainingDays;
};

export const getMonthDays = (targetDate: string) => {
  const date = new Date(targetDate);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}월 ${day}일`;
};
