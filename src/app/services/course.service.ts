import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private _URL = 'Data/data.json'
  private _http = inject(HttpClient)
  constructor() { }

  courseNames(): Observable<any>{
    return this._http.get<any>(`${this._URL}`)
  }

  
 
  url = 'http://localhost:3000'

  putPosts(){
    const id = '3'
    const data = {
          "title": 'RSK',
        }
  return this._http.patch<any>(`${this.url}/posts/${id}`, data)
  }
}
