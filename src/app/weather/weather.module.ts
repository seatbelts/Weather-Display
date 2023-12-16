import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherRoutingModule } from './weather-routing.module';



@NgModule({
  declarations: [
    WeatherListComponent,
    WeatherDetailsComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
