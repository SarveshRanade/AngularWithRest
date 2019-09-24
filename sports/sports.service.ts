import { Injectable } from '@angular/core';
import { HttpResponse, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Sports } from './sports.model';

export type EntityResponseType = HttpResponse<Sports>;
@Injectable({
  providedIn: 'root'
})
export class SportsService {
  private resourceURL = 'http://localhost:8080/api/getAll';
  constructor() { }
}
