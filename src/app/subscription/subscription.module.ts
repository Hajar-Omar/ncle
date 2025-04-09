import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionPageRoutingModule } from './subscription-routing.module';

import { SubscriptionPage } from './subscription.page';
import { HeaderComponent } from '../core/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionPageRoutingModule,
    HeaderComponent,
  ],
  declarations: [SubscriptionPage],
})
export class SubscriptionPageModule {}
