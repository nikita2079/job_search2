import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jobs } from './jobs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  baseURL = "https://jobs.github.com/positions.json?description=api";

  constructor(private httpClient: HttpClient) {  }

  public getJobList(): Observable<any> {
    return this.httpClient.get<Jobs[]>(this.baseURL);
  }
}
