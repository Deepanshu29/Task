import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamWithTimeComponent } from './view/exam-with-time/exam-with-time.component';
import { ExamWithoutTimeComponent } from './view/exam-without-time/exam-without-time.component';
import { PagenotfoundComponent } from './view/pagenotfound/pagenotfound.component';
import { FrontWithTimeComponent } from './view/front-with-time/front-with-time.component';
import { FrontWithoutTimeComponent } from './view/front-without-time/front-without-time.component';
import { PhysicsComponent } from './view/questions/physics/physics.component';

const routes: Routes = [
 {
   path: 'frontWith',
   component: FrontWithTimeComponent
 },
 {
   path: 'frontWithout',
   component: FrontWithoutTimeComponent
 },
  {
    path: 'with',
    component: ExamWithTimeComponent
  },
  {
    path: 'without',
    component: ExamWithoutTimeComponent
  },
  {
    path: 'Paper',
    component: PhysicsComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }