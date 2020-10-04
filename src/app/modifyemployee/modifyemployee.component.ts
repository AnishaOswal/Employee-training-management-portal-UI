import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifyemployee',
  templateUrl: './modifyemployee.component.html',
  styleUrls: ['./modifyemployee.component.css']
})
export class ModifyemployeeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Modify(){
    this.router.navigate(['modify']);
  }
  Back(){
    this.router.navigate(['employeedetails']);
  }

}
