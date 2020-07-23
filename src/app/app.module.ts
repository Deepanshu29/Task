import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamwithouttimeService } from './service/examwithouttime.service';
import { ExamwithtimeService } from './service/examwithtime.service';
import { ExamWithTimeComponent } from './view/exam-with-time/exam-with-time.component';
import { ExamWithoutTimeComponent } from './view/exam-without-time/exam-without-time.component';
import { PagenotfoundComponent } from './view/pagenotfound/pagenotfound.component';
import { FrontWithTimeComponent } from './view/front-with-time/front-with-time.component';
import { FrontWithoutTimeComponent } from './view/front-without-time/front-without-time.component';
import { PhysicsComponent } from './view/questions/physics/physics.component';
import { ChemistryComponent } from './view/questions/chemistry/chemistry.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamWithTimeComponent,
    ExamWithoutTimeComponent,
    PagenotfoundComponent,
    FrontWithTimeComponent,
    FrontWithoutTimeComponent,
    PhysicsComponent,
    ChemistryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ExamwithouttimeService,ExamwithtimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
