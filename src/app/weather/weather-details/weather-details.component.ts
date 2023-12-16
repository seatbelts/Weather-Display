import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { WeatherService } from '../services/weather.service';
import { Forecast } from '../interfaces/forecast';

import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import Annotation from 'chartjs-plugin-annotation';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.scss'
})
export class WeatherDetailsComponent implements OnInit{

  private forecastId: string = '';

  public title: string = '';

  public isLoading: boolean = true;

  public forecast: Observable<Forecast[]> = new Observable();;

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: '',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: '#FF0000',
        pointBorderColor: '#FF0000',
        pointHoverBackgroundColor: '#FF0000',
        pointHoverBorderColor: '#FF0000',
        fill: 'origin',
      },
    ],
    labels: [],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      y: {
        position: 'left',
      },
    }
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {
    Chart.register(Annotation);
  }

  ngOnInit(): void {
    this.forecastId = this.route.snapshot.paramMap.get('location')?.toUpperCase() || '';

    if (this.forecastId === 'LWX') {
      this.title = `Forecast for District of Columbia (${this.forecastId})`;
    } else if (this.forecastId === 'TOP') {
      this.title = `Forecast for Kansas (${this.forecastId})`;
    } else {
      this.title = 'Forecast not Found';
    }

    this.forecast = this.weatherService.retrieveWeatherForecasts(this.forecastId)
      .pipe(
        map((forecastData: Forecast[]) => {
          this.lineChartData.datasets[0].data = forecastData.map((forecast: Forecast) => forecast.temperature);
          this.lineChartData.datasets[0].label = this.forecastId + ' Forecast';
          this.lineChartData.labels = forecastData.map((forecast: Forecast) => forecast.name);
          return forecastData;
        })
      )
  }

}
