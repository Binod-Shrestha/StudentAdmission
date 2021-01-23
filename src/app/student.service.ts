import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient) { }

  getStudent(id: number): Observable<object>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createStudent(student: object): Observable<object>{
    return this.http.put(`${this.baseUrl}` + `/create`, student);
  }

  updateStudent(id: number, value: any): Observable<object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteStudent(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getStudentList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getStudentByAge(age: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }

  deleteAll(): Observable<any>{
    return this.http.delete(`${this.baseUrl}` + `/delete`, {responseType: 'text'} );
  }

}
