import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navigateToHome() {
    console.log("Home clicked");
  };

  navigateToEmployee() {
    console.log("Employee clicked");
  };

  navigateToStudent() {
    console.log("Student clicked");
  };

  navigateToAbout() {
    console.log("About clicked");
  };

  

}
