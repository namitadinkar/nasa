import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarsRoverService {

  constructor(private http: HttpClient) {}

  getPhotos(rover: string, sol: number){
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=yt9KEhNVr1Hvw9Yqjt5cUHisiFwXyWsrq6QIcTRv`;
    return this.http.get(url);
  }
}
