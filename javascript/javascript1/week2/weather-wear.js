function outfitBasedOnWeather(temp) {
  if (temp >= 35) {
    return "shorts and a t-shirt";
  } else if (temp >= 30) {
    return "a summer dress and sandals";
  } else if (temp >= 25) {
    return "trousers and a vibrant shirt";
  } else if (temp >= 20) {
    return "Keep it classy with a light jacket and a trendy t-shirt";
  } else if (temp >= 15) {
    return "Sweater and favorite pair of jeans";
  } else if (temp >= 10) {
    return "Layer up with a warm coat over a cozy turtleneck";
  } else {
    return "Layer up with a warm coat, scarf, and boots to brave the cold";
  }
}

const suggestedOutfit = outfitBasedOnWeather(20);
console.log(suggestedOutfit); // Logs out: "Keep it classy with a light jacket and a trendy t-shirt"
