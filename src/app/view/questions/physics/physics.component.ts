import { Component, OnInit } from '@angular/core';
import { ExamwithouttimeService } from 'src/app/service/examwithouttime.service';


@Component({
  selector: 'app-physics',
  templateUrl: './physics.component.html',
  styleUrls: ['./physics.component.css']
})
export class PhysicsComponent implements OnInit {
  entries;
  constructor(private without: ExamwithouttimeService) { }

  ngOnInit(): void {
    this.without.ExamWithoutTime().subscribe(res=>{
      return this.entries = res;
    });
  }

}
