export interface Forecast {
  detailedForecast: string;
  dewPoint: ForecastValues
  endTime: string;
  icon: string;
  isDaytime: boolean;
  name: string;
  number: number;
  probabilityOfPrecipitaion: ForecastValues;
  relativeHumidity: ForecastValues;
  shortForeCast: string;
  startTime: string;
  temperature: number;
  temperatureTrend: any;
  temperatureUnit: string;
  windDirection: string;
  windSpeed: string;
}

interface ForecastValues {
  unitCode: string;
  value: number;
}
