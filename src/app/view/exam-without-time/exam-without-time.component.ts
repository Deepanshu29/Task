import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ExamwithouttimeService } from 'src/app/service/examwithouttime.service';

@Component({
  selector: 'app-exam-without-time',
  templateUrl: './exam-without-time.component.html',
  styleUrls: ['./exam-without-time.component.css']
})
export class ExamWithoutTimeComponent implements OnInit {
  entries;
  constructor(private Without: ExamwithouttimeService, private router: Router) { }

  ngOnInit(): void {
    this.Without.ExamWithoutTime().subscribe(res=>{
      console.log(res);
      return this.entries = res;
    });
  }
  onSelect(quesNo){
    this.router.navigate(['/without',quesNo])
  }
}
