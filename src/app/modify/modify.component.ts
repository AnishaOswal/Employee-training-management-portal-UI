import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Modify(){
    this.router.navigate(['modify']);
  }
  Back(){
    this.router.navigate(['employeedetails']);

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