import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {environment} from 'environments/environment';




@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    HttpClientModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ DashboardComponent ]
})

export class DashboardModule {
  
  // states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado'];
  // ngOnInit() {
  //   this.countryForm = this.fb.group({
  //     countryControl: ['Canada']
  //   });
  
}
