import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-removeemployee',
  templateUrl: './removeemployee.component.html',
  styleUrls: ['./removeemployee.component.css']
})
export class RemoveemployeeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Remove(){
    
  }
  Back(){
    this.router.navigate(['employeedetails']);
  }

}
