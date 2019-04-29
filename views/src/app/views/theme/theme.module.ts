// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';

import { HttpClientModule } from '@angular/common/http';
import {environment} from 'environments/environment';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ThemeRoutingModule,
    HttpClientModule
  ],
  declarations: [
    ColorsComponent,
    TypographyComponent
  ]
})
export class ThemeModule { }
