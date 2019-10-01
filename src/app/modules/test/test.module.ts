import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { SidenavModule } from 'src/app/shared/sidenav/sidenav.module';
import { PageModule } from 'src/app/shared/page/page.module';



@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    PageModule
  ]
})
export class TestModule { }
