import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './navBar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations:
   [
    NavBarComponent,
    FooterComponent
   ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:
  [
      NavBarComponent,
      FooterComponent
  ]
})
export class SharedModule { }
