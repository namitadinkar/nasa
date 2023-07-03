import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApodService } from '../apod.service';
import { FavouritesComponent } from '../favourites/favourites.component';
import { FavouritesService } from '../favourites.service';
import { FormBuilder, FormGroup } from '@angular/forms';

interface ApodResponse {
  title: string;
  explanation: string;
  url: string;
}

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {
  apodList: any
  selectedApod: ApodResponse | null = null;
  apod: any;
 
  newTitle: any;
  titleForm: FormGroup;
  showForm: boolean[]=[];
  addedToFavorites: boolean[] = [];

  // @ViewChild('imageContainer') imageContainer!: ElementRef<HTMLDivElement>;


  constructor(public http: HttpClient, public apodService: ApodService, public favouritesComponent: FavouritesComponent,
    public elementRef: ElementRef, public favouriteService: FavouritesService, public formBuilder: FormBuilder) {


      this.titleForm = this.formBuilder.group({
        newTitle: ''
      });
     }

  ngOnInit() {
    this.getApod();

  }

  showExplanation(apod: ApodResponse) {
    this.selectedApod = apod;
  }

  closeExplanation() {
    this.selectedApod = null;
  }

  getApod(){
    this.apodService.getApod().subscribe((res) => {
      console.log("apod res", res)
      this.apod = res;
    });
  }

  getLastWeekApods(){
    // this.imageContainer.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.apodService.getLastWeekApods().subscribe((res) =>{
      console.log("7 days photos", res);
      this.apodList = res

    })
  }

 
  addToFavourites(imageUrl:string, title:string, explanation:string, index:number) {
    let newTitle = this.titleForm.value.newTitle || title;
    this.favouriteService.addToFavourites(imageUrl, newTitle, explanation);
    this.titleForm= this.formBuilder.group({
      newTitle: ''
    });
    this.addedToFavorites[index] =true;
    // this.showSucessMsg()
  }

  toggleForm(index: number) {
    this.showForm[index] = true;
}
  // showSucessMsg(){
    
  // }

  scrollToTop() {
    const containerElement = this.elementRef.nativeElement.querySelector('.container');
    containerElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
