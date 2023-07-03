
import { Component, OnInit, ViewChild } from '@angular/core';
import { MarsRoverService } from '../mars-rover.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mars-rover',
  templateUrl: './mars-rover.component.html',
  styleUrls: ['./mars-rover.component.scss']
})
export class MarsRoverComponent implements OnInit {

  selectedRover: any ;
  inputSol: any;
  response: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['image', 'date', 'link'];
  photos: any;
  currentPage = 1;
  pageSize = 25;
  // totalPages: number = 0;
  photosPerPage: any[]=[];



  constructor(private marsRoverPhotosService: MarsRoverService) {

  }

  ngOnInit() {
    // this.marsRoverPhotosService.getPhotos(this.selectedRover, this.selectedSol).subscribe((res) => {
    //   console.log("mar rover res", res)
    //   this.photos = res;
    // });
  }

  showMarsRoverPhotos(){
    this.marsRoverPhotosService.getPhotos(this.selectedRover, this.inputSol).subscribe((res) => {
      console.log("mar rover res", res)
      this.response = res;
      this.photos = this.response.photos;
      // console.log(this.photos.length)

      this.photosPerPage =  this.photos.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
    });

  
  }

  handlePageChange(event: any) {
    this.currentPage = event.pageIndex + 1;
    this.showMarsRoverPhotos();
  }

}