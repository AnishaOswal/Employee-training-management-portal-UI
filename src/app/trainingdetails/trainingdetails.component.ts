import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainingdetails',
  templateUrl: './trainingdetails.component.html',
  styleUrls: ['./trainingdetails.component.css']
})
export class TrainingdetailsComponent implements OnInit {
  columnDefs = [
    { field: 'Emp Id', width:100 , sortable: true, filter: true },
    { field: 'Course Code',width:170, sortable: true, filter: true },
    { field: 'Score',width:150, sortable: true, filter: true },
    { field: 'Hours Spent',width:170,sortable: true, filter: true },
    { field: 'Data Completed',width:250, sortable: true, filter: true },
    { field: 'Status',width:160, sortable: true, filter: true }
];

rowData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
