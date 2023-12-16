import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  retrievveWeatherForecasts(forecastId: string): Observable<any> {
    const url = `https://api.weather.gov/gridpoints/${forecastId}/31,80/forecast`;
    return this.http.get(url)
      .pipe(
        map((forecastData: any) => {
          return forecastData.properties.periods;
        })
      );
  }
}
