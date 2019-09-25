import { Injectable } from '@angular/core';
import { CustomerModel } from "./customer.model";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
url= 'http://172.16.1.45:8080'
  constructor(private http: HttpClient) {}



    addCustomer(formData) {
      console.log("service", formData);
      return this.http.post(this.url + '/cust/addCustomer', formData);
    }
    getCustomer() {
      return this.http.get(this.url + '/cust/allCustomers/');
    }
    
    editCustomer(id, formData: CustomerModel) {
      return this.http.put(this.url + '/customer/' + id, formData);
    }
    deleteCustomer(id) {
      return this.http.delete(this.url + '/cust/deleteCustomer/' + id);
    }
}
