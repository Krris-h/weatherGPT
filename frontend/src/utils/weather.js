export const getWeatherCategory = (condition = "") => {
  const value = condition.toLowerCase();

  if (value.includes("thunder")) return "thunderstorm";

  if (
    value.includes("rain") ||
    value.includes("drizzle") ||
    value.includes("shower")
  ) {
    return "rain";
  }

  if (
    value.includes("snow") ||
    value.includes("sleet")
  ) {
    return "snow";
  }

  if (
    value.includes("fog") ||
    value.includes("mist") ||
    value.includes("haze")
  ) {
    return "fog";
  }

  if (value.includes("cloud")) return "cloudy";

  if (
    value.includes("clear") ||
    value.includes("sunny")
  ) {
    return "clear";
  }

  return "unknown";
};


export const isRainyWeather = (condition = "") => {
  const category = getWeatherCategory(condition);

  return ["rain", "thunderstorm"].includes(category);
};


export const getWeatherMessage = (condition = "") => {
  const category = getWeatherCategory(condition);

  const messages = {
    clear: "Clear weather expected.",
    cloudy: "Cloudy conditions expected.",
    rain: "Rainy weather expected. Carry an umbrella.",
    thunderstorm: "Thunderstorm possible. Stay cautious.",
    snow: "Snowy conditions expected.",
    fog: "Low visibility may occur due to fog.",
    unknown: "Weather information is currently unavailable.",
  };

  return messages[category];
};