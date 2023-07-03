import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApodComponent } from './apod/apod.component';
import { MarsRoverComponent } from './mars-rover/mars-rover.component';
import { FavouritesComponent } from './favourites/favourites.component';

const routes: Routes = [
  { path: 'apod', component: ApodComponent },
  { path: 'mars-rover-photos', component: MarsRoverComponent },
  { path: 'favourites', component: FavouritesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
