import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {
  NbAccordionModule,
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbContextMenuModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbSelectModule,
  NbSidebarModule,
  NbSidebarService,
  NbTabsetModule,
  NbThemeModule,
  NbToastrModule,
} from '@nebular/theme';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { VerticalMenuComponent } from './comp/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from './comp/horizontal-menu/horizontal-menu.component';
import { AddNewProjectComponent } from './views/add-new-project/add-new-project.component';
import { AllProjectsComponent } from './views/all-projects/all-projects.component';
import { ProjectsReportComponent } from './views/projects-report/projects-report.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { ArchiveProjectsComponent } from './views/archive-projects/archive-projects.component';
import { AuthFormComponent } from './comp/auth-form/auth-form.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { AuthFormRegisterComponent } from './comp/auth-form-register/auth-form-register.component';

const routes: Routes = [
  { path: '', component: AllProjectsComponent },
  { path: 'add-project', component: AddNewProjectComponent },
  { path: 'report', component: ProjectsReportComponent },
  { path: 'archive', component: ArchiveProjectsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    AddNewProjectComponent,
    AllProjectsComponent,
    ProjectsReportComponent,
    ArchiveProjectsComponent,
    AuthFormComponent,
    WelcomeComponent,
    AuthFormRegisterComponent,
  ],
  imports: [
    BrowserModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbEvaIconsModule,
    AppRoutingModule,
    NbCardModule,
    NbActionsModule,
    RouterModule.forRoot(routes),
    NbMenuModule.forRoot(),
    NbInputModule,
    NbSelectModule,
    NbDatepickerModule,
    NbDatepickerModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    FormsModule,
    ReactiveFormsModule,
    NbAccordionModule,
    NbContextMenuModule,
    NbIconModule,
    NbDateFnsDateModule,
    NbListModule,
    NbToastrModule.forRoot(),
    NbTabsetModule,
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
