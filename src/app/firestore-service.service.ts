import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreServiceService {
  allProjects$: Observable<any[]>;
  archivedProjects$: Observable<any[]>;
  constructor(private firestore: AngularFirestore) {
    this.allProjects$ = firestore
      .collection('projects')
      .valueChanges({ idField: 'propertyId' });

    this.archivedProjects$ = firestore
      .collection('archive')
      .valueChanges({ idField: 'propertyId' });
  }

  addProject(project) {
    this.firestore
      .collection('projects')
      .add(project)
      .then(() => console.log('its written'))
      .catch((err) => console.log('error'));
  }

  deleteProject(id) {
    this.firestore.doc(`projects/${id}`).delete();
  }

  archiveProject(project, id) {
    this.firestore.collection('archive').add(project);
    this.deleteProject(id);
  }
}
