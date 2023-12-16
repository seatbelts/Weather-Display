import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrl: './weather-list.component.scss'
})
export class WeatherListComponent {

  forecasts = [
    {
      title: 'District of Columbia',
      abbreviation: 'LOX',
      id: 'lox'
    },
    {
      title: 'Kansas',
      abbreviation: 'TOP',
      id: 'top'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}


  navigateTo(forecastId: string): void {
    this.router.navigate([forecastId], { relativeTo: this.route });
  }
}
