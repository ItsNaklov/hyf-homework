function getEventWeekday(daysfromtoday) {
  const today = new Date();
  const todayIndex = today.getDay();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfEvent = weekdays[(todayIndex + daysfromtoday) % 7];
  return dayOfEvent;
}
console.log(getEventWeekday(2));
