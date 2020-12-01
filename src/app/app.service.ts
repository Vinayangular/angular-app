import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseObject } from './responseObject';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {

   };

  getEmployees() {
    console.log("Get Employee called in Service file");
  // Write a code to send request to back end
  return this.http.get("http://dummy.restapiexample.com/api/v1/employees");   //Here we are sending request to backedm,
                                                                               //Url we get from the backend developer


  


  };

  
  // () => {

  // };

  getCars() {
    console.log("Car Details");
    return this.http.get("http://dummy.restapiexample.com/api/v1/employees");
  };

    // CRUD - GET, PUT, POST, DELETE
    // create - POST
    // retrive - GET
    // update - PUT
    // delete - DELETE

    


};


