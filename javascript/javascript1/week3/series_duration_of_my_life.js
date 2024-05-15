const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
  {
    title: "Mad Men",
    days: 3,
    hours: 10,
    minutes: 0,
  },
];
function LogOutSeriesText(seriesDurations) {
  const averageLifespanHours = 80 * 365 * 24; // 80 years as average lifespan

  // Find the duration of "Mad Men"
  const madMenSeries = seriesDurations.find(
    (series) => series.title === "Mad Men"
  );
  if (!madMenSeries) {
    console.log("Mad Men series not found.");
    return;
  }

  const madMenDurationHours =
    madMenSeries.days * 24 + madMenSeries.hours + madMenSeries.minutes / 60;

  // Calculate percentage of "Mad Men" duration compared to average lifespan
  const percentageOfMadMen = (madMenDurationHours / averageLifespanHours) * 100;

  // Log out the percentage of life spent watching "Mad Men"
  console.log(`Mad Men took ${percentageOfMadMen.toFixed(3)}% of my life`);
}

const madMenSeriesDurations = [
  {
    title: "Mad Men",
    days: 3,
    hours: 1,
    minutes: 0,
  },
];

LogOutSeriesText(seriesDurations);
