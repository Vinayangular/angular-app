import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToHome() {
    console.log("Home clicked");
    this.router.navigate(['home']);
  };

  navigateToEmployee() {
    console.log("Employee clicked");
    this.router.navigate(['employee']);
  };

  navigateToStudent() {
    console.log("Student clicked");
    this.router.navigate(['student']); 
  };

  navigateToAbout() {
    console.log("About clicked");
    this.router.navigate(['aboutus']);
  };

  

}
