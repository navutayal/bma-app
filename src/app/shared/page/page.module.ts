import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PageTitleService } from './page-title.service';
import { NavComponent } from './sidenav/nav.component';


@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule
  ],
  exports: [SidenavComponent],
  declarations: [HeaderComponent, SidenavComponent, NavComponent],
  providers: [PageTitleService]
})
export class PageModule { }
