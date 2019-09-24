import { Injectable } from "@angular/core";
import { Forms } from "./forms.model";
import { HttpResponse, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FormsService {
  resourceURL = "http://localhost:8080/api/create";

  resourceURL1 = "http://localhost:8080/api/delete";

  constructor(private http: HttpClient) {}

  saveCandidate(formData): Observable<any[]> {
    console.log("Method Called in Service  " + formData.value.fname);
    // JSON.stringify(formData);
    return this.http.post<any>(`${this.resourceURL}`, formData.value);
  }

  deleteCandidate(id: number) {
    return this.http.delete<any>(`${this.resourceURL1}/${id}`);
  }
}
