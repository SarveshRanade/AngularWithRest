import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { NgbModalConfig, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SportsService } from "./sports.service";
import { HttpClient } from "@angular/common/http";
import { Sports } from "./sports.model";
import { FormsService } from "../forms/forms.service";

@Component({
  selector: "app-sports",
  templateUrl: "./sports.component.html",
  styleUrls: ["./sports.component.css"]
})
export class SportsComponent implements OnInit, OnDestroy {
  sportsDetails: Array<Sports> = [];
  fileToUpload: File = null;
  sportService: SportsService;
  eform: FormGroup;
  search;
  resourceURl = "http://localhost:8080/api/getAll";
  tesp = "";
  filename: string;
  temp = "";
  sports = [
    {
      name: "Cricket",
      players: 11
    },
    {
      name: "Hockey",
      players: 8
    },
    {
      name: "Kabbadi",
      players: 6
    }
  ];
  name: any;

  constructor(
    private route: ActivatedRoute,
    private sportsService: SportsService,
    private http: HttpClient,
    private formService: FormsService
  ) {
    this.sportService = this.sportService;
  }
  get f() {
    return this.eform.controls;
  }

  ngOnInit() {
    // this.eform = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
    //   email: new FormControl('', [Validators.required, Validators.email])
    // });

    this.http.get(this.resourceURl).subscribe(data => {
      this.sportsDetails = data as Sports[];
    });
  }
  ngOnDestroy() {}
  // OnSubmit() {
  //   console.log(this.eform.value);
  // }

  OnDelete(id: number) {
    this.formService.deleteCandidate(id).subscribe();
  }
}
