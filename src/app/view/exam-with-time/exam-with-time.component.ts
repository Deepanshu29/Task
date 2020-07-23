import { Component, OnInit } from '@angular/core';
import { ExamwithtimeService } from 'src/app/service/examwithtime.service';


@Component({
  selector: 'app-exam-with-time',
  templateUrl: './exam-with-time.component.html',
  styleUrls: ['./exam-with-time.component.css']
})
export class ExamWithTimeComponent implements OnInit {

  constructor(private With: ExamwithtimeService) { }

  ngOnInit(): void {
    this.With.ExamWithTime().subscribe(res=>{
      console.log(res);
    })
  }

}
