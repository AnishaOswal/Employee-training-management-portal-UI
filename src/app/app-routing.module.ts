import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { TrainingdetailsComponent } from './trainingdetails/trainingdetails.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ModifyemployeeComponent } from './modifyemployee/modifyemployee.component';
import { RemoveemployeeComponent } from './removeemployee/removeemployee.component';
import { ModifyComponent } from './modify/modify.component';

const routes: Routes = [ 
{path: 'landingpage' , component: LandingpageComponent },
{path: 'trainingdetails' , component: TrainingdetailsComponent },
{path: '' , redirectTo: '/landingpage', pathMatch:'full' },
{path: 'employeedetails' , component: EmployeedetailsComponent },
{path: 'addemployee' , component: AddemployeeComponent },
{path: 'modifyemployee' , component: ModifyemployeeComponent },
{path: 'removeemployee' , component: RemoveemployeeComponent },
{path: 'modify' , component: ModifyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }
