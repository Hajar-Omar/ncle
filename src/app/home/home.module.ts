import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { DiscoverSectionComponent } from './components/discover-section/discover-section.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MainSectionComponent,
    DiscoverSectionComponent,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
