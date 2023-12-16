import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';
import { Forecast } from '../interfaces/forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveWeatherForecasts(forecastId: string): Observable<Forecast[]> {
    const url = `https://api.weather.gov/gridpoints/${forecastId}/31,80/forecast`;
    return this.http.get(url)
      .pipe(
        map((forecastData: any) => {
          return forecastData.properties.periods;
        })
      );
  }
}
