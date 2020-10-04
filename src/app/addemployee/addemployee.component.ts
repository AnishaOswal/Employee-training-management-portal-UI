import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Success(){
    var retVal = confirm("Do you want to continue ?");
               if( retVal == true ) {
                  document.write ("User wants to continue!");
                  return true;
               } else {
                  document.write ("User does not want to continue!");
                  return false;
  }}
  Cancel(){
    this.router.navigate(['employeedetails']);
  }

}
