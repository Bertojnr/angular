import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponseModel } from './model/interface/phone';

@Injectable({
  providedIn: 'root',
})
export class Masterservice {
  
  constructor(private http: HttpClient) {}

  getLiving():Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>('https://www.themealdb.com/api/json/v1/1/categories.php');
  }
}
