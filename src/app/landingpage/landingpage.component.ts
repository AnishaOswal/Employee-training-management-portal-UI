import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  columnDefs = [
    { field: 'Emp Id', width:100 , sortable: true, filter: true },
    { field: 'Name',width:150, sortable: true, filter: true },
    { field: 'DOB',width:130, sortable: true, filter: true },
    { field: 'Email Id',width:250,sortable: true, filter: true },
    { field: 'City',width:100, sortable: true, filter: true },
    { field: 'Contact No',width:130, sortable: true, filter: true }
];

rowData: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
}
