import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AgGridModule } from 'ag-grid-angular';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TrainingdetailsComponent } from './trainingdetails/trainingdetails.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ModifyemployeeComponent } from './modifyemployee/modifyemployee.component';
import { RemoveemployeeComponent } from './removeemployee/removeemployee.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { NewtopnavbarComponent } from './newtopnavbar/newtopnavbar.component';
import { ModifyComponent } from './modify/modify.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    TrainingdetailsComponent,
    EmployeedetailsComponent,
    AddemployeeComponent,
    ModifyemployeeComponent,
    RemoveemployeeComponent,
    TopnavbarComponent,
    SidenavbarComponent,
    NewtopnavbarComponent,
    ModifyComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatSidenavModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

