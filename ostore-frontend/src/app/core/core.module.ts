import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, HomeComponent, LoginComponent],
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [NavbarComponent]
})
export class CoreModule {}
