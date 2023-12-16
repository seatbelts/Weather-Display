import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherListComponent } from './weather-list/weather-list.component';

const routes: Routes = [
  {
    path: '', component: WeatherListComponent,
    children: [
      {
        path: ':location',
        component: WeatherDetailsComponent
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
