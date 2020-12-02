import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './student/student.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AttendanceComponent } from './student/attendance/attendance.component';
import { StudentNavComponent } from './student/student-nav/student-nav.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { StudentCompletedCoursesComponent } from './student/student-completed-courses/student-completed-courses.component';
import { StudentPendingCoursesComponent } from './student/student-pending-courses/student-pending-courses.component';
import { StudentPersonalInfoComponent } from './student/student-personal-info/student-personal-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentComponent,
    AboutComponent,
    HomeComponent,
    AttendanceComponent,
    StudentNavComponent,
    StudentHomeComponent,
    StudentCompletedCoursesComponent,
    StudentPendingCoursesComponent,
    StudentPersonalInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
