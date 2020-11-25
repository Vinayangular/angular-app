import { Component } from '@angular/core';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  appType : string ="";

  constructor(private appService:AppService) {

  };


  searchByCaseNumber() {
    console.log("Search By Button Called");

  };

  changeToAngular() {
    console.log("This is Angular");
    this.appType="Angular App";
  };

  changeToReact() {
    console.log("This is React");
    this.appType="React App";
  };

  getAllEmployees() {
    console.log("All Employees List"); 
    // Write a code to call a function which is in service file
    this.appService.getEmployees();
  };

























};
