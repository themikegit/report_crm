import { Component, OnInit } from '@angular/core';
import { FirestoreServiceService } from 'src/app/firestore-service.service';

@Component({
  selector: 'app-archive-projects',
  templateUrl: './archive-projects.component.html',
  styleUrls: ['./archive-projects.component.css'],
})
export class ArchiveProjectsComponent implements OnInit {
  constructor(private fservice: FirestoreServiceService) {}

  projects;

  ngOnInit(): void {
    this.projects = this.fservice.archivedProjects$;
  }
}
