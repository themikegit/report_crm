import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { FirestoreServiceService } from 'src/app/firestore-service.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css'],
})
export class AllProjectsComponent implements OnInit {
  constructor(private fservice: FirestoreServiceService) {}
  projects;

  onClick(id) {
    console.log(id);
    this.fservice.deleteProject(id);
  }

  onClickComplete(project, id) {
    this.fservice.archiveProject(project, id);
  }

  ngOnInit(): void {
    this.projects = this.fservice.allProjects$;
  }
}
