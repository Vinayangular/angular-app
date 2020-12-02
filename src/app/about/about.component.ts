import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ResponseObject } from '../responseObject';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {

  appType : string ="";
  employeeResponse : any;
  response: any = [
    { id: "C23444", name: "John", email: "john@gmail.com" }, 
    { id: "C23445", name: "Tom", email: "tom@gmail.com" }, 
    { id: "C23446", name: "John1", email: "john1@gmail.com" }
  ]

  // response[0].id;
  // response[0].name;
  // response[0].email;

  carDetails: ResponseObject;
  showTable: boolean = false;


  constructor(private appService:AppService) {
    //I am constructor
  };


  searchByCaseNumber() {
    console.log("Search By Button Called");
    this.response.data;
    // test function.

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
    this.appService.getEmployees().subscribe((resp) => {  
      console.log(resp);
      this.employeeResponse = resp;
      console.log(this.employeeResponse);
    });
    
  };
   
  getCarDetails() {
    console.log("Get Car Details");
    this.appService.getCars().subscribe((resp: ResponseObject) => {
      // console.log(resp.data);
      this.carDetails = resp;
      this.showTable = true;
    });

  };

  // {data: array of objects, status: string}







  

}

