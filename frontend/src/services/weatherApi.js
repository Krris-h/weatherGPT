const BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

export const getCurrentWeather = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/weather?city=${encodeURIComponent(city)}`
    );

    if (!response.ok) {
      throw new Error("Unable to fetch weather data.");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getWeatherByLocation = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/weather/location?lat=${latitude}&lon=${longitude}`
    );

    if (!response.ok) {
      throw new Error("Unable to fetch weather data.");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};