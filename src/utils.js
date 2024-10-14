export function calculateTimeLeft(targetTime) {
  const now = new Date();
  const utcNow = new Date(now.getTime() + now.getTimezoneOffset() * 60000); // Преобразуем локальное время в UTC
  const difference = targetTime - utcNow;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}