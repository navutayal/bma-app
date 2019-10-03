import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { MatListModule } from '@angular/material/list';



@NgModule({
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [NavComponent],
  declarations: [NavComponent]
})
export class NavModule { }
