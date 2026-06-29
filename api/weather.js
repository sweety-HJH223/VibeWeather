export default async function handler(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: 'Missing query parameter' });
  }

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${encodeURIComponent(q)}&days=6&aqi=yes&alerts=no&lang=en`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
}
