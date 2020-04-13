import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { PagesRoutes } from './pages.routing';

import { FooterComponent } from '../shared/footer/footer.component';
import { FixedpluginComponent } from '../shared/fixedplugin/fixedplugin.component';
import { FixedpluginModule } from '../shared/fixedplugin/fixedplugin.module';

import { RegisterComponent } from './register/register.component';
import { PricingComponent } from './pricing/pricing.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { SdnHomeComponent } from './sdn-home/sdn-home.component';
import { SdnFullMapComponent } from './sdn-full-map/sdn-full-map.component';
import { LocationListComponent } from './location-list/location-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    PricingComponent,
    LockComponent,
    SdnHomeComponent,
    SdnFullMapComponent,
    LocationListComponent,
    // FixedpluginComponent,
    // FooterComponent
  ]
})

export class PagesModule {}
