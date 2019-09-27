import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BmaAppComponent } from './bma-app.component';
import { ExampleNavComponent } from './example-nav/example-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavbarModule } from './shared/navbar/navbar.module';
import { TestModule } from './modules/test/test.module';
import { BMA_ROUTES } from './routes';

@NgModule({
  declarations: [
    BmaAppComponent,
    ExampleNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NavbarModule,
    TestModule,
    RouterModule.forRoot(BMA_ROUTES)
  ],
  providers: [],
  bootstrap: [BmaAppComponent]
})
export class AppModule { }
