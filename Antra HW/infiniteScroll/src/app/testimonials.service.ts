import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { TestimonialsResponse } from './model/testimonialsResponse.model';
import { Testimonial } from './model/testimonial.model';


@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {}

  getComments(start: number, limit: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?_start=${start}&_limit=${limit}`);
  }
}
