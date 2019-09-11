import { Injectable } from '@angular/core';
import { CustomerModel } from "./customer.model";
import { HttpClient } from '@angular/client/http';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
url= 'http://localhost:8080'
  constructor(private http: HttpClient) {}

    addCustomer(formData: CustomerModel) {
      console.log("service", formData);
      return this.http.post(this.url + '/customers', formData);
    }
    getCustomer(id) {
      return this.http.get<{message: string}>(this.url + '/customer/' + id);
    }
    editCustomer(id, formData: CustomerModel) {
      return this.http.put(this.url + '/customer/' + id, formData);
    }
    deleteCustomer(id) {
      return this.http.delete(this.url + '/customer/' + id);
    }
}
