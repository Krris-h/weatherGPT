// Temperature ko proper format me dikhane ke liye
export const formatTemperature = (temperature) => {
  if (temperature === null || temperature === undefined) {
    return "--";
  }

  return `${Math.round(temperature)}°C`;
};

// Wind speed format karne ke liye
export const formatWindSpeed = (speed) => {
  if (speed === null || speed === undefined) {
    return "--";
  }

  return `${Math.round(speed)} km/h`;
};

// Humidity format karne ke liye
export const formatHumidity = (humidity) => {
  if (humidity === null || humidity === undefined) {
    return "--";
  }

  return `${humidity}%`;
};

// Date ko readable format me dikhane ke liye
export const formatDate = (date) => {
  if (!date) return "--";

  return new Intl.DateTimeFormat("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(new Date(date));
};

// Time ko readable format me dikhane ke liye
export const formatTime = (date) => {
  if (!date) return "--";

  return new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(date));
};