import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";

import { FormsModule } from '@angular/forms';


import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    NzButtonModule,
    FlexLayoutModule,
    UserRoutingModule
  ]
})
export class UserModule { }
