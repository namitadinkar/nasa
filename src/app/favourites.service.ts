import { Injectable } from '@angular/core';

@Injectable()
export class FavouritesService {
   favouritesKey = 'favourites';
   private favourites: any[] = [];


  addToFavourites(imageUrl: string, title: string, explanation: string): void {
    const favourites = this.getFavourites();
    const newFavourite = { imageUrl, title, explanation };

    for (let i=0; i<favourites.length; i++){
      if (favourites[i].imageUrl == imageUrl) {
        if (favourites[i].title == title) {
          return;
        } else {
          favourites[i].title = title
          this.saveFavourites(favourites);
          return
        }
      }
    }
    favourites.push(newFavourite);
    console.log("favourites", favourites);
    this.saveFavourites(favourites);
  }

  removeFromFavourites(index: number): void {
    const favourites = this.getFavourites();
    favourites.splice(index, 1);
    this.saveFavourites(favourites);
  }

  getFavourites(): any[] {
    const favourites = localStorage.getItem(this.favouritesKey);
    return favourites ? JSON.parse(favourites) : [];
  }

  saveFavourites(favourites: any[]): void {
    localStorage.setItem(this.favouritesKey, JSON.stringify(favourites));
  }

  updateTitle(index: number, newTitle: string) {
    this.favourites[index].title = newTitle;
    this.saveFavouritesToLocalStorage();
  }

  private saveFavouritesToLocalStorage() {
    localStorage.setItem('favourites', JSON.stringify(this.favourites));
  }
}

