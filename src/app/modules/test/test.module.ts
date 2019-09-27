import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { SidenavModule } from 'src/app/shared/sidenav/sidenav.module';



@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    SidenavModule
  ]
})
export class TestModule { }
