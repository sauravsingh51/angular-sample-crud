import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
     
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { AppInfoModel } from '../models/AppInfoModel';
  
@Injectable({
  providedIn: 'root'
})
export class AppInfoService {
  
  private apiURL = "https://jsonplaceholder.typicode.com"; //sample API url for checking the css comment this line and uncomment below line with flask backend url

  // private apiURL = "http://<<flask-backend-url>>:<<port>>";
    
  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private httpClient: HttpClient) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  getAll(): Observable<any> { //API call for getting all APIModelInfos
  
    // return this.httpClient.get(this.apiURL + '/app')

    return this.httpClient.get(this.apiURL + '/posts')  //sample api call to sample api url for checking the table css 
    
    //comment this and uncomment above line for getting actual data from flask app
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  create(appInfoModel:AppInfoModel): Observable<any> { // API call for creating a new AppInfoModel
  
    return this.httpClient.post(this.apiURL + '/app/', JSON.stringify(appInfoModel), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id:number): Observable<any> { //API call for getting a specific app by id
  
    return this.httpClient.get(this.apiURL + '/app/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id:number, appInfoModel:AppInfoModel): Observable<any> { // API call for updating a specific app by id
  
    return this.httpClient.put(this.apiURL + '/app/' + id, JSON.stringify(appInfoModel), this.httpOptions)
 
    .pipe( 
      catchError(this.errorHandler)
    )
  }
       
  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id:number){ //deleting a specific app by id
    return this.httpClient.delete(this.apiURL + '/app/' + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
      
  /** 
   * Write code on Method
   *
   * @return response()
   */
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}