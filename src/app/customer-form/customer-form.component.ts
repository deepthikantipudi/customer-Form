import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { CustomerService } from "../customer.service";

@Component({
  selector: "app-customer-form",
  templateUrl: "./customer-form.component.html",
  styleUrls: ["./customer-form.component.less"]
})
export class CustomerFormComponent implements OnInit {
  @ViewChild("f", { static: false }) form: NgForm;
  mode = "add";
  id;

  // formdata = {
  //   FirstName: 'Sneha',
  //   LastName: 'Salla',
  //   Address1: '123 Main St',
  //   Address2: '12',
  //   City: 'Novi',
  //   State: 'MI',
  //   Country: 'USA',
  //   ZipCode: '56003',
  //   Phone: '5078976543',
  //   EmailID: 'sneha.salla@gmail.com'

  formdata: any = {
    FirstName: "",
    LastName: "",
    Address1: "",
    Address2: "",
    City: "",
    State: "",
    Country: "",
    ZipCode: "",
    Phone: "",
    EmailID: ""
  };
  constructor(
    private router: Router,
    private customerservice: CustomerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("id")) {
        this.mode = "edit";
        this.id = paramMap.get("id");

        this.customerservice.getCustomer(this.id).subscribe(responseData => {
          this.formdata = responseData;
        });
      } else {
        this.mode = "add";
        this.id = null;
      }
    });
  }

  onSubmit() {
    if (this.mode === 'add') {
      console.log(this.form.value);
      this.customerservice.addCustomer(this.formdata).subscribe(
        res => {
          console.log(res);
          console.log("Added");
        },
        err => {
          console.log("error", err);
        }
      );
    } else {
      this.customerservice.editCustomer(this.id, this.formdata).subscribe(
        res => {
          console.log(res);

        },
        err => {
          console.log("error", err);
        }
      );
    }
    }
  }
