import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassPageComponent } from './modules/pages/class-page/class-page.component';
import { ClassRegistrationPageComponent } from './modules/pages/class-registration-page/class-registration-page.component';
import { HomePageComponent } from './modules/pages/home-page/home-page.component';
import { StudentPageComponent } from './modules/pages/student-page/student-page.component';
import { StudentRegistrationsPageComponent } from './modules/pages/student-registrations-page/student-registrations-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'homepage', component: HomePageComponent},
  {path: 'students', component: StudentPageComponent},
  {path: 'students/classes', component: StudentRegistrationsPageComponent},
  {path: 'classes', component: ClassPageComponent},
  {path: 'classes/students', component: ClassRegistrationPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
