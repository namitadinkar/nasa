import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ApodService {

  url = 'https://api.nasa.gov/planetary/apod?api_key=yt9KEhNVr1Hvw9Yqjt5cUHisiFwXyWsrq6QIcTRv'

  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  getApod(){
    let today = new Date();
    let params = new HttpParams();
    let todayFormatted: string = today.toISOString().slice(0, 10);

    params = params.set('date', String(todayFormatted));

    return this.http.get(this.url, {params});
  }
  
  getLastWeekApods(){

    let today = new Date();
    let sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7);
    console.log("today : "+ today + " past : "+ sevenDaysAgo);
    let todayFormatted: string = today.toISOString().slice(0, 10);
    let sevenDaysAgoFormatted: string = sevenDaysAgo.toISOString().slice(0, 10);

    console.log('Today:', todayFormatted);
    console.log('7 days ago:', sevenDaysAgoFormatted);
    let params = new HttpParams();

    params = params.set('start_date', String(sevenDaysAgoFormatted));
    params = params.set('end_date', String(todayFormatted));
    
    return this.http.get(this.url, {params});

  }
}