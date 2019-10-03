import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { NavbarModule } from '../../navbar/navbar.module';
import { NavModule } from '../../nav/nav.module';
import { ClientSidenavComponent } from './client-sidenav/client-sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    NavbarModule,
    NavModule,
    RouterModule
  ],
  exports: [ClientSidenavComponent],
  declarations: [ClientSidenavComponent]
})
export class ClientModule { }
