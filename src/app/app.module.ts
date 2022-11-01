import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { HomePageComponent } from './modules/pages/home-page/home-page.component';
import { StudentPageComponent } from './modules/pages/student-page/student-page.component';
import { FilterStudentPipe } from './services/services-filters/services-filters-student/filter-student.pipe';
import { DeleteStudentPageComponent } from './modules/pages/components/components-page/components-student-page/delete-student-page/delete-student-page.component';
import { AddStudentPageComponent } from './modules/pages/components/components-page/components-student-page/add-student-page/add-student-page.component';
import { FieldErrorDisplayComponent } from './modules/pages/components/field-error-display/field-error-display.component';
import { EditStudentPageComponent } from './modules/pages/components/components-page/components-student-page/edit-student-page/edit-student-page.component';
import { StudentRegistrationsPageComponent } from './modules/pages/student-registrations-page/student-registrations-page.component';
import { FilterClassPipe } from './services/services-filters/services-filters-class/filter-class.pipe';
import { AddStudentRegistrationPageComponent } from './modules/pages/components/components-page/components-student-registration-page/add-student-registration-page/add-student-registration-page.component';
import { NgSelectModule } from "@ng-select/ng-select";
import { DeleteStudentRegistrationPageComponent } from './modules/pages/components/components-page/components-student-registration-page/delete-student-registration-page/delete-student-registration-page.component';
import { ClassPageComponent } from './modules/pages/class-page/class-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    StudentPageComponent,
    FilterStudentPipe,
    DeleteStudentPageComponent,
    AddStudentPageComponent,
    FieldErrorDisplayComponent,
    EditStudentPageComponent,
    StudentRegistrationsPageComponent,
    FilterClassPipe,
    AddStudentRegistrationPageComponent,
    DeleteStudentRegistrationPageComponent,
    ClassPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
