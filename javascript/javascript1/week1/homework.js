// Age-ify (A future age calculator)

const yearOfBirth = 1991;
const yearFuture = 2070;

const age = yearFuture - yearOfBirth;

console.log("You will be " + age + " years old in " + yearFuture);

//Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2012;
const dogYearFuture = 2024;
const shouldShowResultInDogYears = true;
const dogAge = dogYearFuture - dogYearOfBirth;
const dogYears = dogAge * 7;

if (shouldShowResultInDogYears) {
  console.log(`Your dog will be ${dogYears} dog years old in ${dogYearFuture}`);
} else {
  console.log(`Your dog will be ${dogAge} human years old in ${dogYearFuture}`);
}

//Housey pricey (A house price estimator)
function calculateHousePrice(width, depth, height, gardenSize) {
  const volumeInMeters = width * depth * height;
  const housePrice = volumeInMeters * 2.5 * 1000 + gardenSize * 300;
  return housePrice;
}

const peterHouse = {
  width: 8,
  depth: 10,
  height: 10,
  gardenSize: 100,
};

const juliaHouse = {
  width: 5,
  depth: 11,
  height: 8,
  gardenSize: 70,
};

const peterHousePrice = calculateHousePrice(
  peterHouse.width,
  peterHouse.depth,
  peterHouse.height,
  peterHouse.gardenSize
);
const juliaHousePrice = calculateHousePrice(
  juliaHouse.width,
  juliaHouse.depth,
  juliaHouse.height,
  juliaHouse.gardenSize
);

console.log(`Peter's house price: ${peterHousePrice}`);
console.log(`Julia's house price: ${juliaHousePrice}`);

// Ez Namey (Startup name generator)

const firstWords = [             
  "Easy",
  "Awesome",
  "Corporate",
  "Cool",
  "Creative",
  "Fast",
  "Flexible",
  "Innovative",
  "Eco friendly",
  "Sustainable",
];
const secondWords = [
  "Solutions",
  "Technologies",
  "Company",
  "Group",
  "Cybersecurity",
  "Dataanalytics",
  "Systems",
  "Services",
  "World",
  "Future",
];

const randomFirstWordIndex = Math.floor(Math.random() *10);
const randomSecondWordIndex = Math.floor(Math.random() *10);

const startupName =
  firstWords[randomFirstWordIndex] + " " + secondWords[randomSecondWordIndex];
const startupNameLength = startupName.length;

console.log(
  `The startup: "${startupName}" contains ${startupNameLength} characters`
);