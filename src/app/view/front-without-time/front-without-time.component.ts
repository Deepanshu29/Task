import { Component, OnInit } from '@angular/core';
import { ExamwithouttimeService } from 'src/app/service/examwithouttime.service';
@Component({
  selector: 'app-front-without-time',
  templateUrl: './front-without-time.component.html',
  styleUrls: ['./front-without-time.component.css']
})
export class FrontWithoutTimeComponent implements OnInit {
  entries;
  constructor(private Without: ExamwithouttimeService) { }

  ngOnInit(): void {
    this.Without.ExamWithoutTime().subscribe(res=>{
      console.log(res);
      return this.entries = res;
    });
  }
  }
