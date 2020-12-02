import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { AttendanceComponent } from './student/attendance/attendance.component';
import { StudentCompletedCoursesComponent } from './student/student-completed-courses/student-completed-courses.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { StudentPendingCoursesComponent } from './student/student-pending-courses/student-pending-courses.component';
import { StudentPersonalInfoComponent } from './student/student-personal-info/student-personal-info.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path : "", redirectTo : "home", pathMatch : "full"},
  {path :"home", component :HomeComponent},
  {path : "employee", component : EmployeeComponent},
  {path : "student", component : StudentComponent, children: [
    {path: "attendance", component : AttendanceComponent},
    {path: "home", component : StudentHomeComponent},
    {path: "completedcourses", component : StudentCompletedCoursesComponent},
    {path: "pendingcourses", component : StudentPendingCoursesComponent},
    {path: "personalinfo", component : StudentPersonalInfoComponent}
  ]},
  {path : "aboutus", component : AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
