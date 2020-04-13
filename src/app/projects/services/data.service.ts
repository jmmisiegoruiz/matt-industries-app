import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../model/project';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public getAllProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>('http://localhost:8080/projects');
  }
}
