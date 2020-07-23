import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExamwithtimeService {

  constructor(private http: HttpClient) { }
  ExamWithTime(){
    return this.http.get('https://testapi.io/api/dayamoymaji14/question_with_sectional_time').pipe(map(result=>{
      return result;
    }));
  }

}
