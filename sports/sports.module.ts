import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsService } from './sports.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  providers: [SportsService],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SportsModule { }
