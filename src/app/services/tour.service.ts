import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tour } from '../interfaces/tour';

@Injectable({
  providedIn: 'root',
})
export class TourService {
  private readonly apiUrl = 'https://6814ead4225ff1af162a822a.mockapi.io/api/v1/tours/tour';
  private http = inject(HttpClient);

  constructor() { }
  
  getTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.apiUrl);    
  }
}
