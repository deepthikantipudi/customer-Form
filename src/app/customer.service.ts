import { Injectable } from '@angular/core';
import { CustomerModel } from "./customer.model";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  private headers = new HttpHeaders({ "Content-Type": "application/json" });
message;
  constructor(private http: HttpClient, private router: Router) {}

    // addCustomer(formData: CustomerModel) {
    //   console.log("service", formData);
    //   this.http.post("http://localhost:8080" );
    // }


    // addCustomer(formData) {
    //   console.log("service", formData);
    //   this.http
    //     .post("http://localhost:8080/customers", formData, {
    //       headers: this.headers
    //     })
    //     .subscribe(
    //       (res: { Message: String }) => {
    //         this.message = res.Message;
    //         this.router.navigate(["/success"]);
    //       },
    //       err => {
    //         console.log("error", err);
    //       }
    //     );
    // }

    
    addCustomer(formData) {
      console.log("service", formData);
      this.http.post("http://localhost:8080/customers", formData, {headers: this.headers});
    }
}
