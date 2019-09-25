import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.less']
})
export class CustomerlistComponent implements OnInit {

  customerdata;
  constructor(private customerservice: CustomerService) {
    this.customerservice.getCustomer().subscribe(
      (res) => {
          console.log(res);
          this.customerdata = res;
      },
      err => {
             console.log("error", err);
           }
    );
          }
    delete(id){
    this.customerservice.deleteCustomer(id).subscribe(
      (res) => {
        console.log(res);
        
    },
    err => {
           console.log("error", err);
         }
    );
  }

  ngOnInit() {
  }


  // data = [
  //   {FirstName: "deepthi", LastName: "policy001"},
  //   {FirstName: "deepthi", LastName: "policy001"},
  //   {FirstName: "deepthi", LastName: "policy001"},
  //   {FirstName: "deepthi", LastName: "policy001"},
  //   {FirstName: "deepthi", LastName: "policy001"},  
  // ];

  // onSubmit(){
  //   this.router.navigate(['']);
  // }

}
