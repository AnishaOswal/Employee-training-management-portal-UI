import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openemployeedetails(){
    this.router.navigate(['employeedetails']);

  }
  opentrainingdetails(){
    this.router.navigate(['trainingdetails']);
  }
}
