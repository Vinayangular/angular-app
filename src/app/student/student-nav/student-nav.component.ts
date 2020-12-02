import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-nav',
  templateUrl: './student-nav.component.html',
  styleUrls: ['./student-nav.component.css']
})
export class StudentNavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToStudentHome() {
    this.router.navigate(['/student/home']);
  };

  navigateToStudentAttendance() {
    this.router.navigate(['/student/attendance']);
  };

  navigateToStudentCompletedCourses() {
    this.router.navigate(['/student/completedcourses']);
  };

  navigateToStudentPendingCourses() {
    this.router.navigate(['/student/pendingcourses']);
  };

  navigateToStudentPersonalInfo() {
    this.router.navigate(['/student/personalinfo']);
  };

};
