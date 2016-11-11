import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  imports: [
    SharedModule,
    LandingRoutingModule
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
