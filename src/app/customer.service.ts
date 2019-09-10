import { Injectable } from '@angular/core';
import { CustomerModel } from "./customer.model";

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor() {}

    addCustomer(formData: CustomerModel) {
      console.log("service", formData);
      //this.http.post("");
    }
}
