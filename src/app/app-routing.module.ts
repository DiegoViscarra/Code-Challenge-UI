import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/pages/home-page/home-page.component';
import { StudentPageComponent } from './modules/pages/student-page/student-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'homepage', component: HomePageComponent},
  {path: 'students', component: StudentPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
