import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionPageRoutingModule } from './subscription-routing.module';

import { SubscriptionPage } from './subscription.page';
import { FormComponent } from './components/form/form.component';
import { SummaryComponent } from './components/summary/summary.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionPageRoutingModule,
    FormComponent,
    SummaryComponent,
  ],
  declarations: [SubscriptionPage],
})
export class SubscriptionPageModule {}
