import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompoRoutingModule } from './compo-routing.module';
import { FilmsComponent } from './films/films.component';
import { PlanetsComponent } from './planets/planets.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { StarshipsComponent } from './starships/starships.component';
import { SpeciesComponent } from './species/species.component';
import { CherectersComponent } from './cherecters/cherecters.component';


@NgModule({
  declarations: [
    FilmsComponent,
    PlanetsComponent,
    VehiclesComponent,
    StarshipsComponent,
    SpeciesComponent,
    CherectersComponent
  ],
  imports: [
    CommonModule,
    CompoRoutingModule
  ]
})
export class CompoModule { }
