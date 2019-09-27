import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './nav.component';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    NavbarModule,
    MatListModule,
    RouterModule
  ],
  exports: [SidenavComponent],
  declarations: [SidenavComponent, NavComponent]
})
export class SidenavModule { }
