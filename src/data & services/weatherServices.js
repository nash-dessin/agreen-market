const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

export async function getWeather(location) {
  const latitude = location?.latitude ?? location?.lat;
  const longitude = location?.longitude ?? location?.lng ?? location?.lon;

  if (latitude === undefined || longitude === undefined) {
    throw new Error("Location coordinates are required to fetch weather.");
  }

  const url = `${WEATHER_API_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch weather");
  }

  return response.json();
}
