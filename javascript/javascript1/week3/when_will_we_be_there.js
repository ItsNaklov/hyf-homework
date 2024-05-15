function estimateArrivalTime(travelInformation) {
  const { speed, destinationDistance } = travelInformation;
  const totalHours = destinationDistance / speed;
  const hours = Math.floor(totalHours);
  const minutes = Math.round((totalHours - hours) * 60);
  const formattedTime = `${hours} hours and ${minutes} minutes`;
  return formattedTime;
}
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = estimateArrivalTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
