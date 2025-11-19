import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Phone } from './model/interface/phone';

@Injectable({
  providedIn: 'root',
})
export class Rolesservice {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.restful-api.dev/objects';
  
  //  getPhones(): Observable<Phone[]> {
  //   return this.http.get<Phone[]>(this.apiUrl);
  // }

  createPhone(phone: Phone): Observable<Phone> {
    return this.http.post<Phone>(this.apiUrl, phone);
  }

  updatePhone(id: string, phone: Phone): Observable<Phone> {
    return this.http.put<Phone>(`${this.apiUrl}/${id}`, phone);
  }

  deletePhone(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
