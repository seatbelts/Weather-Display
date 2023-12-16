import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherService } from './services/weather.service';



@NgModule({
  declarations: [
    WeatherListComponent,
    WeatherDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    WeatherRoutingModule
  ],
  providers: [
    WeatherService,
  ]
})
export class WeatherModule { }
