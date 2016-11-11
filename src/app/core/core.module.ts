import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

import { HeaderComponent } from './header';

import { MarvelService, UserService } from './services';
import { ConnectionModalComponent } from './connection-modal';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    HeaderComponent,
    ConnectionModalComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    MarvelService,
    UserService
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`
        CoreModule is already loaded.
        Import it in the AppModule only
      `);
    }
  }
}