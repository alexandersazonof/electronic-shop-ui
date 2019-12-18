import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatBadgeModule, MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexModule,
    MatBadgeModule,
    RouterModule
  ]
})
export class CoreModule { }
