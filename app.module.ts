import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SportsModule } from './sports/sports.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SportsComponent } from './sports/sports.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { BarchartComponent } from './barchart/barchart.component';
import { SportsService } from './sports/sports.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SportsComponent,
    FormsComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SportsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [SportsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
