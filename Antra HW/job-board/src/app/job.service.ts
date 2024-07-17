import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, mergeMap, of, toArray } from 'rxjs';
import { Job } from './job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobIdsUrl = 'https://hacker-news.firebaseio.com/v0/jobstories.json';
  private jobDetailUrl = 'https://hacker-news.firebaseio.com/v0/item/';

  constructor(private http: HttpClient) { }

  getJobIds(): Observable<number[]> {
    return this.http.get<number[]>(this.jobIdsUrl);
  }

  getJobDetail(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.jobDetailUrl}${id}.json`);
  }

  getJobs(jobIds: number[], pageSize: number, currentIndex: number): Observable<Job[]> {
    const jobsToLoad = jobIds.slice(currentIndex, currentIndex + pageSize);
    return of(...jobsToLoad).pipe(
      mergeMap(id => this.getJobDetail(id)),
      toArray()
    );
  }
}
