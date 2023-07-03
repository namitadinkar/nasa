import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  favourites: any[]=[];

  constructor(private favouritesService: FavouritesService) { }

  ngOnInit(): void {
    this.favourites = this.favouritesService.getFavourites();
  }

  removeFromFavourites(index: number): void {
    this.favouritesService.removeFromFavourites(index);
    this.favourites = this.favouritesService.getFavourites();
  }

  updateTitle(index: number, newTitle: string) {
    this.favouritesService.updateTitle(index, newTitle);
  }
}

