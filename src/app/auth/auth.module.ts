import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from '../auth/header/header.component';
import { FooterComponent } from '../auth/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import {MatFormFieldModule} from '@angular/material/form-field';
import { GoogleMapControlModule } from './google-map/google-map.control.module';
import {MatSelectModule} from '@angular/material/select';

import { AdressComponent } from './adress/adress.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
   
    AdressComponent
 
   

  ],
  imports: [
    
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    GoogleMapControlModule
  
    
  ]
})
export class AuthModule { }
