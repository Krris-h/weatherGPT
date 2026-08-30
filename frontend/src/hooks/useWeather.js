"use client";

import { useState } from "react";
import {
  getCurrentWeather,
  getWeatherByLocation,
} from "../services/weatherApi";

export default function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherByCity = async (city) => {
    if (!city?.trim()) {
      setError("Please enter a city name.");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const data = await getCurrentWeather(city.trim());
      setWeather(data);
    } catch (err) {
      setError(err.message || "Unable to fetch weather data.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByLocation = async (latitude, longitude) => {
    if (latitude === undefined || longitude === undefined) {
      setError("Location coordinates are missing.");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const data = await getWeatherByLocation(latitude, longitude);
      setWeather(data);
    } catch (err) {
      setError(err.message || "Unable to fetch weather data.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const clearWeather = () => {
    setWeather(null);
    setError(null);
  };

  return {
    weather,
    loading,
    error,
    fetchWeatherByCity,
    fetchWeatherByLocation,
    clearWeather,
  };
}