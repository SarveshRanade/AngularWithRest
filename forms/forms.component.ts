import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import Swal from "sweetalert2";
import { FormsService } from "./forms.service";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"]
})
export class FormsComponent implements OnInit {
  dd: string;
  date1: Date;
  today: Date;
  empform: FormGroup;
  constructor(private formService: FormsService) {}

  ngOnInit() {
    this.DateFormatter();
    this.formInit();
  }
  get f() {
    return this.empform.controls;
  }
  formInit() {
    this.empform = new FormGroup({
      fname: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15)
      ]),
      lname: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15)
      ]),
      mobile: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      date: new FormControl("", [Validators.required])
    });
  }

  DateFormatter() {
    this.today = new Date();
    const dd = this.today.toISOString().substring(0, 10);
    document.getElementById("date123").setAttribute("max", dd);
  }
  OnSubmit() {
    this.formService.saveCandidate(this.empform).subscribe(() => {
      Swal.fire({
        title: "Submitted",
        animation: false,
        customClass: {
          popup: "animated tada"
        }
      });
    });
  }
  OnDate() {
    this.date1 = this.empform.value.date;
  }
}
