import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Project } from './model/project';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: Observable<Project[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.projects = this.dataService.getAllProjects();
  }

}
