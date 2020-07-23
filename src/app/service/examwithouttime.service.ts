import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExamwithouttimeService {

  constructor(private Http: HttpClient) { }

  ExamWithoutTime(){
    return this.Http.get('https://testapi.io/api/dayamoymaji14/question_without_sectional_time').pipe(map(result => {
      return result;
    }));
  }
}
