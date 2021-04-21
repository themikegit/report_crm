import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { FirestoreServiceService } from 'src/app/firestore-service.service';

@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.css'],
})
export class AddNewProjectComponent implements OnInit {
  private index: number = 0;
  constructor(
    private fservice: FirestoreServiceService,
    private toastService: NbToastrService
  ) {}

  newProject: FormGroup;

  onSubmit() {
    this.fservice.addProject(this.newProject.value);
    this.showToast('top-right', 'success');
    this.newProject.reset();
  }

  showToast(position, status) {
    this.index += 1;
    this.toastService.show(status || 'Success', `Toast ${this.index}`, {
      position,
      status,
    });
  }

  ngOnInit(): void {
    this.newProject = new FormGroup({
      projectName: new FormControl(),
      budget: new FormControl(),
      platform: new FormControl(),
      type: new FormControl(),
      due: new FormControl(),
    });
  }
}
