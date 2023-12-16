import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgChartsModule } from 'ng2-charts';
import { ModalModule } from 'ngx-bootstrap/modal';

import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherRoutingModule } from './weather-routing.module';

import { WeatherService } from './services/weather.service';
import { ErrorModalComponent } from './modals/error-modal/error-modal.component';



@NgModule({
  declarations: [
    WeatherListComponent,
    WeatherDetailsComponent,
    ErrorModalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgChartsModule,
    ModalModule.forRoot(),
    WeatherRoutingModule
  ],
  providers: [
    WeatherService,
  ]
})
export class WeatherModule { }
