import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.less']
})
export class CustomerFormComponent implements OnInit {
@ViewChild('f', {static: false}) form: NgForm;

formdata = {
  FirstName: 'Sneha',
  LastName: 'Salla',
  Address1: '123 Main St',
  Address2: '12',
  City: 'Novi',
  State: 'MI',
  Country: 'USA',
  ZipCode: '56003',
  Phone: '5078976543',
  EmailID: 'sneha.salla@gmail.com'

};
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value);
  }
}

